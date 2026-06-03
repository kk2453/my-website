const STACK = [
  {
    category: 'cloud',
    items: ['oci', 'azure', 'cloudflare'],
  },
  {
    category: 'development',
    items: ['ktor', 'node.js', 'react', 'postgresql', 'redis'],
  },
  {
    category: 'infrastructure',
    items: ['terraform', 'prometheus', 'grafana'],
  },
]

export function StackTile() {
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
        arsenal
      </span>

      <div className="flex flex-col gap-3">
        {STACK.map(group => (
          <div key={group.category} className="flex flex-col gap-1">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}
            >
              {group.category}
            </span>
            <p
              className="text-sm"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-mono)', wordBreak: 'break-word'}}
            >
              {group.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}