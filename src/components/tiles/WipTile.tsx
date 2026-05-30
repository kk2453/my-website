const Project = {
        description: "a self-hosted platform to catch, inspect and replay webhooks in real time.",

    }

export function WipTile() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between h-full transition-colors duration-200 cursor-default"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        in progress
      </span>

      <div className="mt-auto flex flex-col gap-1">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <p
          className="text-sm mt-2"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-mono)' }}
        >
          {Project.description}
        </p>
      </div>
    </div>
  )
}