const description = "me with help from claude and chatgpt — may 2026"

export function CreditsTile() {
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
        credits
      </span>

      <p
        className="mt-auto text-xs"
        style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        {description}
      </p>
    </div>
  )
}