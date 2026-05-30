import { useTheme } from './hooks/useTheme'
import { HeroTile }     from './components/tiles/HeroTile'
import { LocationTile } from './components/tiles/LocationTile'
import { ThemeTile }    from './components/tiles/ThemeTile'
import { LinksTile }    from './components/tiles/LinksTile'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <main
      className="min-h-screen p-4 md:p-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 max-w-5xl mx-auto">

        {/* row 1 */}
        <div className="md:col-span-7">
          <HeroTile />
        </div>
        <div className="md:col-span-5">
          <LocationTile />
        </div>

        {/* row 2 */}
        <div className="md:col-span-4">
          <ThemeTile theme={theme} onToggle={toggle} />
        </div>
        <div className="md:col-span-8">
          <LinksTile />
        </div>

      </div>
    </main>
  )
}

export default App