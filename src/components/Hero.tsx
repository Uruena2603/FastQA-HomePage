import { ArrowDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useT } from '../i18n/LanguageContext'
import Aurora from './react-bits/Aurora'
import DecryptedText from './react-bits/DecryptedText'
import Logo from './Logo'
import Particles from './react-bits/Particles'
import Button from './ui/Button'

export default function Hero() {
  const { theme } = useTheme()
  const t = useT()
  const isLight = theme === 'light'

  const auroraStops = isLight
    ? ['#2F5674', '#5B7F9C', '#D55C4D']
    : ['#1A3348', '#2F5674', '#D55C4D']

  const particleColors = isLight
    ? ['#223E54', '#5B7F9C', '#D55C4D']
    : ['#FFFFFF', '#5B7F9C', '#E07A6C']

  const titleMain = t('home.heroTitleMain')
  const titleAccent = t('home.heroTitleAccent')

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <div className={`absolute inset-0 z-0 ${isLight ? 'opacity-55' : 'opacity-100'}`}>
        <Aurora
          key={`aurora-${theme}`}
          colorStops={auroraStops}
          amplitude={1.15}
          blend={0.55}
          speed={0.85}
        />
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${isLight ? 'opacity-45' : 'opacity-70'}`}
      >
        <Particles
          key={`particles-${theme}`}
          particleCount={isLight ? 90 : 140}
          particleSpread={12}
          speed={0.08}
          particleColors={particleColors}
          alphaParticles
          particleBaseSize={isLight ? 56 : 72}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          cameraDistance={22}
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 z-[2]" style={{ background: 'var(--hero-vignette)' }} />
      <div
        className={`hero-grid-bg absolute inset-0 z-[2] ${isLight ? 'opacity-25 mix-blend-multiply' : 'opacity-40'}`}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="hero-stagger flex flex-col items-center">
          <Logo size="xl" surface={isLight ? 'light' : 'dark'} className="mb-6" />

          <p
            className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: 'var(--color-accent-label)' }}
          >
            {t('home.heroLabel')}
          </p>

          <h1
            className="hero-title-glow max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: 'var(--color-text-on-hero)' }}
          >
            <DecryptedText
              key={`main-${titleMain}`}
              text={titleMain}
              animateOn="view"
              sequential
              speed={28}
              maxIterations={12}
              className="text-[var(--color-text-on-hero)]"
              encryptedClassName="text-[var(--color-text-on-hero)]/35"
              parentClassName="!inline-flex !justify-center w-full"
            />
            <br />
            <span className="text-gradient-accent">
              <DecryptedText
                key={`accent-${titleAccent}`}
                text={titleAccent}
                animateOn="view"
                sequential
                speed={32}
                maxIterations={14}
                className="text-gradient-accent"
                encryptedClassName="text-[var(--color-orange)]/40"
                parentClassName="!inline-flex !justify-center w-full"
              />
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base md:text-lg"
            style={{ color: 'var(--color-hero-muted)' }}
          >
            {t('home.heroDescription')}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/analizar" variant="primary" className="!px-8 !py-3">
              {t('home.heroPrimaryCta')}
            </Button>
            <Button href="#pricing" variant="secondary" className="!px-8 !py-3">
              {t('home.heroSecondaryCta')}
            </Button>
          </div>

          <a
            href="#trust"
            className="mt-16 inline-flex flex-col items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition hover:opacity-100"
            style={{ color: 'var(--color-hero-muted)' }}
          >
            {t('common.explore')}
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
