import { useTheme } from '@/hooks/useTheme'

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm ring-1 ring-gray-900/5 backdrop-blur transition hover:bg-white hover:text-gray-700 dark:bg-surface-800/80 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-surface-800 dark:hover:text-gray-200"
        aria-label="Toggle theme"
      >
        <span className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm ring-1 ring-gray-900/5 backdrop-blur transition hover:bg-white hover:text-gray-700 dark:bg-surface-800/80 dark:text-gray-400 dark:ring-white/10 dark:hover:bg-surface-800 dark:hover:text-gray-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 transition-transform hover:scale-110" />
      ) : (
        <SunIcon className="h-5 w-5 transition-transform hover:scale-110" />
      )}
    </button>
  )
}
