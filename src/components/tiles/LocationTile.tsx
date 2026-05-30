import { useEffect, useState } from 'react'

type EdgeInfo = {
  colo: string
  city: string
  country: string
  ray: string
}

export function LocationTile() {
  const [edge, setEdge] = useState<EdgeInfo | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/ray', { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status)
        return res.json()
      })
      .then((data: EdgeInfo) => setEdge(data))
      .catch(() => setError(true))
  }, [])

  return (
    <div
      className="rounded-2xl p-6 flex flex-col justify-between min-h-40 h-full transition-colors duration-200 cursor-default"
      style={{
        backgroundColor: 'var(--color-accent)',
        border: '1px solid var(--color-accent)',
      }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)', opacity: 0.7 }}
      >
        served from
      </span>

      <div className="mt-auto">
        {error ? (
          <div className="mt-auto flex flex-col gap-1">
             <p
                className="text-2xl font-medium tracking-wider"
                style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)' }}
            >
            offline
            </p>
            <p 
                className="text-xs" 
                style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)', opacity: 0.6 }}
            >
                open via cloudflare to see the edge node
            </p>
  </div>
        ) : edge ? (
          <>
            <p
              className="text-2xl font-medium tracking-wider mb-1"
              style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)' }}
            >
              {edge.colo} · {edge.city.toLowerCase()}
            </p>
            <p
              className="text-xs"
              style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)', opacity: 0.6 }}
            >
              {edge.ray.split('-')[0]}
            </p>
          </>
        ) : (
          <p
            className="text-sm"
            style={{ color: 'var(--color-accent-text)', fontFamily: 'var(--font-mono)', opacity: 0.7 }}
          >
            locating edge...
          </p>
        )}
      </div>
    </div>
  )
}