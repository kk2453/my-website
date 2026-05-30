const PROJECTS = [
  {
    title: 'project one',
    description: 'placeholder description for project one.',
    href: '#',
  },
  {
    title: 'project two',
    description: 'placeholder description for project two.',
    href: '#',
  },
]

export function ProjectsTile() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-200 cursor-default"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        the work
      </span>

      <div className="flex flex-col gap-4">
        {PROJECTS.map(project => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 group"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-sm"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-mono)' }}
              >
                {project.title}
              </span>
              <span
                className="text-sm transition-transform duration-150 group-hover:translate-x-1"
                style={{ color: 'var(--color-accent)' }}
              >
                →
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}