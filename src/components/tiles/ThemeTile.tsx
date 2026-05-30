type Props = {
  theme: string
  onToggle: () => void
}

export function ThemeTile({ theme, onToggle }: Props) {
  const isDark = theme === 'dark'

  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between min-h-40 h-full transition-colors duration-200 cursor-pointer"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
      onClick={onToggle}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        theme
      </span>

      <div className="mt-auto flex items-center justify-between">
        <p
          className="text-2xl font-light"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}
        >
          {isDark ? 'dark.' : 'light.'}
        </p>

        {/* toggle pill */}
        <div
          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs"
          style={{
            backgroundColor: 'var(--color-surface-hover)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ color: isDark ? 'var(--color-text-muted)' : 'var(--color-accent)' }}>
            light
          </span>
          <span style={{ color: 'var(--color-border)' }}>·</span>
          <span style={{ color: isDark ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
            dark
          </span>
        </div>
      </div>
    </div>
  )
}