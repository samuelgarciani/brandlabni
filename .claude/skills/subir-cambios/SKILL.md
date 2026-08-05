---
name: subir-cambios
description: Sube automáticamente los cambios pendientes del proyecto a Git (commit + push) sin necesitar que el usuario escriba comandos técnicos. Usar cuando el usuario pida "subir los cambios", "guardar en git", "hacer commit", "publicar los cambios" o similar.
---

# Subir cambios a Git

El usuario que ejecuta esta skill **no es técnico**. No le pidas que escriba comandos, ni le muestres jerga de git sin explicarla. Tú te encargas de todo el proceso y al final le das un resumen breve y claro en español de lo que se hizo.

Reglas fijas para esta skill (ya acordadas con el usuario, no hay que volver a preguntar):
- Se hace **commit y push** al remoto siempre que haya cambios.
- El push se hace **automáticamente, sin pedir confirmación** en cada ejecución.
- Se trabaja siempre sobre la **rama actual** (la que esté activa en ese momento).

## Pasos a seguir

1. **Revisar el estado del repo**: ejecuta `git status` y `git diff` para ver qué archivos cambiaron y de qué tipo son los cambios. Si no hay cambios (ni en archivos modificados ni nuevos), avisa al usuario en una frase simple ("No hay cambios nuevos que subir") y detente aquí.

2. **Descartar archivos sensibles**: si detectas archivos que parecen contener secretos o credenciales (`.env`, `credentials.json`, claves, tokens, etc.), no los incluyas en el commit y avisa al usuario de forma simple que ese archivo se dejó fuera por seguridad.

3. **Agregar los archivos relevantes**: usa `git add` con los archivos específicos que cambiaron (evita `git add -A`/`git add .` si hay archivos sueltos que no parecen parte del trabajo, para no arrastrar basura o archivos temporales sin querer).

4. **Redactar el mensaje de commit**: escribe un mensaje corto (1-2 frases) que explique el "por qué" del cambio en términos simples, no técnicos. Basado en lo que cambió, no le preguntes al usuario el mensaje.

5. **Hacer el commit** usando un heredoc para el mensaje, por ejemplo:
   ```
   git commit -m "$(cat <<'EOF'
   <mensaje del commit>

   Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
   EOF
   )"
   ```

6. **Verificar la rama y el remoto**: revisa con `git branch --show-current` y `git remote -v` que existe un remoto configurado. Si no hay remoto configurado, avisa al usuario en términos simples que el proyecto no está conectado a ningún repositorio en línea (GitHub u otro) y detente ahí — no se puede hacer push sin remoto.

7. **Hacer push** a la rama actual (`git push`, o `git push -u origin <rama>` si la rama no tiene upstream todavía). No uses `--force` bajo ninguna circunstancia.

8. **Manejar problemas sin romper nada**:
   - Si el push falla porque el remoto tiene cambios que el usuario no tiene localmente, haz `git pull` (nunca `--force`, nunca descartar cambios) y si surge un conflicto de fusión, **detente** y explícale al usuario en lenguaje simple qué pasó y qué decisión necesita tomar tú no puedes resolver conflictos de contenido sin su input.
   - Nunca uses `--no-verify`, `reset --hard`, `clean -f` ni ningún comando destructivo dentro de esta skill.

9. **Resumen final**: termina con un mensaje breve, no técnico, tipo:
   "Listo, subí tus cambios. Guardé: [resumen de qué se modificó] y ya quedó publicado en tu repositorio."

   Si algo no se pudo completar (sin remoto, conflicto, archivo sensible excluido), explica qué pasó y qué falta, siempre en lenguaje sencillo, sin asumir que el usuario sabe qué es un "merge conflict" o un "upstream branch" — descríbelo en sus propias palabras.
