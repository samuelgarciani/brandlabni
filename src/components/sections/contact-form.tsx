"use client";

import { useState } from "react";
import { contact } from "@/content/site";

const inputClasses =
  "w-full bg-navy border-[1.5px] border-white/10 rounded-xl px-4 py-[14px] text-white text-[15px]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { fields, submitLabel, submittedLabel, successMessage } = contact.form;

  return (
    <form
      className="rv bg-navy-2 border border-white/10 rounded-3xl px-8 py-[34px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-sky mb-2">{fields.name.label}</label>
          <input type="text" placeholder={fields.name.placeholder} className={inputClasses} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-sky mb-2">{fields.email.label}</label>
          <input type="email" placeholder={fields.email.placeholder} className={inputClasses} />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-sky mb-2">{fields.message.label}</label>
          <textarea rows={4} placeholder={fields.message.placeholder} className={`${inputClasses} resize-y`} />
        </div>
        <button
          type="submit"
          className="btnp mt-1 bg-orange text-white font-bold text-base p-4 border-none rounded-xl cursor-pointer"
        >
          {sent ? submittedLabel : submitLabel}
        </button>
        {sent && <p className="m-0 text-center text-sm text-sky font-medium">{successMessage}</p>}
      </div>
    </form>
  );
}
