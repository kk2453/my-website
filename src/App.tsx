import { useTheme }       from './hooks/useTheme'
import { HeroTile }       from './components/tiles/HeroTile'
import { LocationTile }   from './components/tiles/LocationTile'
import { ThemeTile }      from './components/tiles/ThemeTile'
import { LinksTile }      from './components/tiles/LinksTile'
import { StackTile }      from './components/tiles/StackTile'
import { WipTile }        from './components/tiles/WipTile'
import { ProjectsTile }   from './components/tiles/ProjectsTile'
import { CreditsTile }    from './components/tiles/CreditsTile'
import { LoginButton } from './components/ui/LoginButton'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <main
      className="min-h-screen p-4 md:p-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <LoginButton />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 max-w-5xl mx-auto">

        {/* row 1 */}
        <div className="md:col-span-7"><HeroTile /></div>
        <div className="md:col-span-5"><LocationTile /></div>

        {/* row 2 */}
        <div className="md:col-span-4"><ThemeTile theme={theme} onToggle={toggle} /></div>
        <div className="md:col-span-8"><LinksTile /></div>

        {/* row 3 */}
        <div className="md:col-span-5"><StackTile /></div>
        <div className="md:col-span-7"><WipTile /></div>

        {/* row 4 */}
        <div className="md:col-span-12"><ProjectsTile /></div>

        {/* row 5 */}
        <div className="md:col-span-12"><CreditsTile /></div>

      </div>
    </main>
  )
}

export default App