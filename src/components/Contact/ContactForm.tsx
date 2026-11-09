'use client';

import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  CONTACT_LIMITS,
  validateContact,
  type ContactField,
  type ContactPayload,
} from '../../lib/contactValidation';
import { useLanguage } from '../LanguageContext';
import { Toast, type ToastMessage } from './Toast';

const EMPTY_FORM: ContactPayload = { name: '', email: '', message: '', website: '' };

type FieldErrors = Partial<Record<ContactField, string>>;

const inputClasses =
  'w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition focus:border-accent/60 focus:outline-none aria-[invalid=true]:border-red-500/60';

export function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactPayload>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const closeToast = useCallback(() => setToast(null), []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (name in errors) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;

    const result = validateContact(form);
    if (!result.ok) {
      // The shared validator returns English strings for the API; the UI maps the failing fields to its own copy.
      const localizedErrors: FieldErrors = {};
      if (result.errors.name) localizedErrors.name = t.contact.errors.name;
      if (result.errors.email) localizedErrors.email = t.contact.errors.email;
      if (result.errors.message) localizedErrors.message = t.contact.errors.message;
      setErrors(localizedErrors);
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      const body = (await response.json().catch(() => null)) as { ok: boolean } | null;

      if (response.ok && body?.ok) {
        setForm(EMPTY_FORM);
        setErrors({});
        setToast({ type: 'success', message: t.contact.success });
      } else {
        const message =
          response.status === 429
            ? t.contact.errors.rateLimited
            : response.status === 403
              ? t.contact.errors.forbidden
              : response.status === 400
                ? t.contact.errors.invalidRequest
                : t.contact.errors.generic;
        setToast({ type: 'error', message });
      }
    } catch {
      setToast({ type: 'error', message: t.contact.errors.generic });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-5 rounded-2xl border border-ink/10 bg-surface/50 p-6 sm:p-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium">
            {t.contact.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={CONTACT_LIMITS.nameMax}
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={inputClasses}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium">
            {t.contact.form.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={CONTACT_LIMITS.emailMax}
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={inputClasses}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="text-sm font-medium">
            {t.contact.form.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={CONTACT_LIMITS.messageMax}
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`${inputClasses} resize-y`}
          />
          <div className="flex justify-between gap-4 text-xs">
            <p id="contact-message-error" className="text-red-500">
              {errors.message}
            </p>
            <span className="ml-auto text-muted">
              {form.message.length}/{CONTACT_LIMITS.messageMax}
            </span>
          </div>
        </div>

        {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="contact-website">{t.contact.form.website}</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {isSending ? t.contact.form.sending : t.contact.form.send}
        </button>
      </form>

      {toast && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
    </>
  );
}
