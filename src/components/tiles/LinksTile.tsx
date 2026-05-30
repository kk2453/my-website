const LINKS = [
  {
    label: 'github',
    href: 'https://github.com/yourusername', // replace with yours
    description: 'code and projects',
  },
  {
    label: 'linkedin',
    href: 'https://linkedin.com/in/yourusername', // replace with yours
    description: 'professional profile',
  },
]

export function LinksTile() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between min-h-40 h-full transition-colors duration-200"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        find me
      </span>

      <div className="mt-auto flex flex-col gap-3">
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex flex-col">
              <span
                className="text-sm transition-colors duration-150"
                style={{
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {link.label}
              </span>
              <span
                className="text-xs"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                {link.description}
              </span>
            </div>

            <span
              className="text-lg transition-transform duration-150 group-hover:translate-x-1"
              style={{ color: 'var(--color-accent)' }}
            >
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}