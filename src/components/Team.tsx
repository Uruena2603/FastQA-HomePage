import { ExternalLink, GraduationCap, Mail, ShieldCheck } from 'lucide-react'
import { TEAM_MEMBERS, type TeamMemberId } from '../data/team'
import { useT } from '../i18n/LanguageContext'
import SpotlightCard from './react-bits/SpotlightCard'
import SectionWrapper from './SectionWrapper'

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

interface TeamExperienceItem {
  role: string
  company: string
  period: string
  highlight: string
}

interface TeamMemberCopy {
  fullName: string
  role: string
  fastQaRole: string
  headline: string
  bio: string
  education: string
  contribution: string
  experience: TeamExperienceItem[]
}

function memberCopy(t: ReturnType<typeof useT>, id: TeamMemberId): TeamMemberCopy {
  return t<TeamMemberCopy>(`team.members.${id}`)
}

export default function Team() {
  const t = useT()

  return (
    <SectionWrapper id="team" className="bg-[var(--color-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-accent-label)]">
          {t('team.eyebrow')}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
          {t('team.title')}
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[var(--color-text-secondary)] md:text-lg">
          {t('team.intro')}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {TEAM_MEMBERS.map((member) => {
            const copy = memberCopy(t, member.id)
            const { socials } = member

            return (
              <SpotlightCard
                key={member.id}
                spotlightColor="rgba(213, 92, 77, 0.18)"
                className="group"
              >
                <article className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <img
                      src={member.avatarUrl}
                      alt={copy.fullName}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] shrink-0 rounded-2xl object-cover ring-2 ring-[var(--color-border-light)]"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
                        {copy.fullName}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-orange)]">
                        {copy.role}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--color-blue-mid)]">{copy.fastQaRole}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)] md:text-sm">
                        {copy.headline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {copy.bio}
                  </p>

                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)]/60 px-3 py-2.5">
                    <GraduationCap
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--color-blue-mid)]"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-label)]">
                        {t('team.educationLabel')}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)] md:text-sm">
                        {copy.education}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-label)]">
                      {t('team.experienceLabel')}
                    </p>
                    <ul className="mt-3 space-y-3">
                      {copy.experience.map((item) => (
                        <li key={`${item.company}-${item.role}`} className="text-sm">
                          <p className="font-semibold text-[var(--color-text-primary)]">
                            {item.role}
                            <span className="font-normal text-[var(--color-text-secondary)]">
                              {' '}
                              · {item.company}
                            </span>
                          </p>
                          <p className="font-mono text-[11px] text-[var(--color-blue-soft)]">
                            {item.period}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-text-secondary)] md:text-sm">
                            {item.highlight}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-label)]">
                      {t('team.expertiseLabel')}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {member.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2 rounded-xl border border-[var(--color-orange)]/25 bg-[var(--color-orange)]/5 px-3 py-2.5">
                    <ShieldCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--color-orange)]"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-orange)]">
                        {t('team.contributionLabel')}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)] md:text-sm">
                        {copy.contribution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--color-border-light)] pt-5">
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                      aria-label={`${copy.fullName} GitHub`}
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                      aria-label={`${copy.fullName} LinkedIn`}
                    >
                      <LinkedInIcon size={16} />
                      LinkedIn
                    </a>
                    {socials.website ? (
                      <a
                        href={socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                        aria-label={`${copy.fullName} website`}
                      >
                        <ExternalLink size={16} strokeWidth={1.75} />
                        Web
                      </a>
                    ) : null}
                    {socials.email ? (
                      <a
                        href={`mailto:${socials.email}`}
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                        aria-label={`${copy.fullName} email`}
                      >
                        <Mail size={16} strokeWidth={1.75} />
                        Email
                      </a>
                    ) : null}
                    {socials.orcid ? (
                      <a
                        href={socials.orcid}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                      >
                        ORCID
                      </a>
                    ) : null}
                    {socials.htb ? (
                      <a
                        href={socials.htb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                      >
                        HTB
                      </a>
                    ) : null}
                    {socials.twitter ? (
                      <a
                        href={socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-orange)]"
                      >
                        X
                      </a>
                    ) : null}
                  </div>
                </article>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
