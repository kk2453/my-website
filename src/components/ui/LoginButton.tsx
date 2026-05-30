import { useState } from 'react'

export function LoginButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 text-xs px-3 py-1.5 rounded-full transition-colors duration-150 z-50"
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        login
      </button>

      {/* modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="mt-12 rounded-2xl p-6 w-72 flex flex-col gap-2"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-sm"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-mono)' }}
              >
                login?
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-xs"
                style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                ✕
              </button>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
            >
              what exactly are you trying to login to?
            </p>
          </div>
        </div>
      )}
    </>
  )
}