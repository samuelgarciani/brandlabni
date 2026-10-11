import { kv } from "@vercel/kv";

/**
 * Likes and comments need state shared across every visitor, which a static
 * Next.js deploy has no server for by default. Vercel KV covers that once the
 * project has a KV store connected (Vercel dashboard → Storage → create
 * database → Connect Project); until then every call below falls back to an
 * in-memory map scoped to this server instance, so local dev and a fresh
 * deploy without KV configured still work — they just don't persist across
 * deploys or serverless cold starts.
 */
const hasKv = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

const memoryNumbers = new Map<string, number>();
const memoryLists = new Map<string, string[]>();

export async function getCount(key: string): Promise<number> {
  if (hasKv) {
    const value = await kv.get<number>(key);
    return Math.max(0, value ?? 0);
  }
  return Math.max(0, memoryNumbers.get(key) ?? 0);
}

export async function incrCount(key: string, delta: 1 | -1): Promise<number> {
  if (hasKv) {
    const value = await kv.incrby(key, delta);
    if (value < 0) {
      // A like/unlike race (or an unlike with no matching like, e.g. from a
      // stale tab) can push the stored value below zero. Floor it in KV
      // itself, not just in the returned value, so the next plain GET
      // doesn't read the negative number back out.
      await kv.set(key, 0);
      return 0;
    }
    return value;
  }
  const next = Math.max(0, (memoryNumbers.get(key) ?? 0) + delta);
  memoryNumbers.set(key, next);
  return next;
}

export async function getList<T>(key: string): Promise<T[]> {
  if (hasKv) {
    const items = await kv.lrange<string>(key, 0, -1);
    return items.map((item) => JSON.parse(item) as T);
  }
  return (memoryLists.get(key) ?? []).map((item) => JSON.parse(item) as T);
}

export async function pushToList<T>(key: string, item: T, maxLength = 200): Promise<void> {
  const serialized = JSON.stringify(item);
  if (hasKv) {
    await kv.lpush(key, serialized);
    await kv.ltrim(key, 0, maxLength - 1);
    return;
  }
  const list = memoryLists.get(key) ?? [];
  list.unshift(serialized);
  memoryLists.set(key, list.slice(0, maxLength));
}
