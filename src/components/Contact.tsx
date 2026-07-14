import { useState, type FormEvent } from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  buildMailtoDemoUrl,
  buildWhatsappDemoUrl,
} from '../constants/social'
import { useT } from '../i18n/LanguageContext'
import SectionWrapper from './SectionWrapper'
import Button from './ui/Button'

export default function Contact() {
  const t = useT()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Demo FastQA — ${company || name || 'Lead'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}\n\nSource: contact-form`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <SectionWrapper id="contact" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('home.contactEyebrow')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('home.contactTitle')}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] md:text-lg">
          {t('home.contactIntro')}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={buildMailtoDemoUrl('contact-card')}
              className="flex items-center gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 transition hover:border-[var(--color-blue-mid)]/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)]">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t('home.contactEmail')}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">{CONTACT_EMAIL}</p>
              </div>
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`}
              className="flex items-center gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 transition hover:border-[var(--color-blue-mid)]/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-blue)]/10 text-[var(--color-blue)]">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t('home.contactPhone')}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">{CONTACT_PHONE}</p>
              </div>
            </a>
            <a
              href={buildWhatsappDemoUrl('contact-card')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-4 transition hover:border-[var(--color-blue-mid)]/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-orange)]/15 text-[var(--color-orange)]">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t('home.contactWhatsapp')}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {t('home.contactWhatsappHint')}
                </p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-[var(--color-text-primary)]">
                  {t('home.contactName')}
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-3 py-2.5 outline-none ring-[var(--color-blue-mid)] focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-[var(--color-text-primary)]">
                  {t('home.contactEmail')}
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-3 py-2.5 outline-none ring-[var(--color-blue-mid)] focus:ring-2"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-text-primary)]">
                {t('home.contactCompany')}
              </span>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-3 py-2.5 outline-none ring-[var(--color-blue-mid)] focus:ring-2"
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-text-primary)]">
                {t('home.contactMessage')}
              </span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-y rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-primary)] px-3 py-2.5 outline-none ring-[var(--color-blue-mid)] focus:ring-2"
              />
            </label>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              {t('home.contactSubmit')}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}
