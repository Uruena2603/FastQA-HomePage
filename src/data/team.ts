/** Metadatos estructurales del equipo (ids, avatares, links, tags). Copy en i18n. */

export type TeamMemberId = 'nicolas' | 'juan-alejandro' | 'camilo' | 'juan-david'

export interface TeamMemberSocials {
  github: string
  linkedin: string
  website?: string
  twitter?: string
  email?: string
  orcid?: string
  htb?: string
}

export interface TeamMemberMeta {
  id: TeamMemberId
  avatarUrl: string
  socials: TeamMemberSocials
  /** Tags técnicos (idioma-neutrales) */
  expertise: string[]
}

export const TEAM_MEMBERS: TeamMemberMeta[] = [
  {
    id: 'nicolas',
    avatarUrl: 'https://avatars.githubusercontent.com/u/111206866?v=4',
    socials: {
      github: 'https://github.com/Nico2603',
      linkedin: 'https://www.linkedin.com/in/nicolas-ceballos-brito/',
      website: 'https://nicolasceballosbrito.com',
      twitter: 'https://x.com/NicolasCBrito',
      email: 'nicolasceballosbrito@gmail.com',
    },
    expertise: [
      'React',
      'TypeScript',
      'Flutter',
      'CI/CD',
      'Testing automatizado',
      'QA',
      'Python',
      'ML',
      'Producto',
    ],
  },
  {
    id: 'juan-alejandro',
    avatarUrl: 'https://avatars.githubusercontent.com/u/150274418?v=4',
    socials: {
      github: 'https://github.com/Uruena2603',
      linkedin: 'https://www.linkedin.com/in/juan-alejandro-urue%C3%B1a-serna-1a15122a2',
      website: 'https://uruena2603.github.io/Personal-blog/',
      email: 'alejourus2003@gmail.com',
    },
    expertise: [
      'Python',
      'React',
      'Cypress',
      'Selenium',
      'Flask',
      'CRM',
      'Funnels',
      'Deep Learning',
    ],
  },
  {
    id: 'camilo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/113046973?v=4',
    socials: {
      github: 'https://github.com/camCy',
      linkedin: 'https://www.linkedin.com/in/camilo-castaneda-yepes-a24a5628a',
      twitter: 'https://x.com/C4milo_CY',
    },
    expertise: [
      'Flutter',
      'SQL',
      'Python',
      'ML',
      'Firebase',
      'Windows Server',
      'Mobile',
      'Testing',
    ],
  },
  {
    id: 'juan-david',
    avatarUrl: 'https://avatars.githubusercontent.com/u/114973749?v=4',
    socials: {
      github: 'https://github.com/liandd',
      linkedin: 'https://www.linkedin.com/in/juan-garciaa2',
      website: 'https://liandd.github.io',
      twitter: 'https://x.com/lianndd_',
      orcid: 'https://orcid.org/0009-0007-7575-2660',
      htb: 'https://profile.hackthebox.com/profile/019ed2b2-ba04-7029-974b-93c9acd04537',
    },
    expertise: [
      'Red Team',
      'eJPT',
      'CRTA',
      'Bug bounty',
      'Docker',
      'CI/CD',
      'NLP',
      'Pentesting',
    ],
  },
]
