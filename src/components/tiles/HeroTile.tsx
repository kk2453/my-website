export function HeroTile() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between min-h-48 transition-colors duration-200 cursor-default h-full"
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        hello
      </span>

      <div className="mt-auto">
        <h1
          className="text-4xl md:text-5xl font-light leading-tight mb-2"
          style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}
        >
          Hey, I’m Kartikay
        </h1>
        <p
          className="text-sm"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
        >
          a systems and cloud engineer building scalable software, infrastructure, and startup products.
        </p>
      </div>
    </div>
  )
}