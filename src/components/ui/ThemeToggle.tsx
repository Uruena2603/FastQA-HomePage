import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useT } from '../../i18n/LanguageContext'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const t = useT()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('common.themeToggleLight') : t('common.themeToggleDark')}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] transition hover:border-[var(--color-blue-mid)] ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
