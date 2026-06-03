import { useTheme }     from './hooks/useTheme'
import { HeroTile }     from './components/tiles/HeroTile'
import { LocationTile } from './components/tiles/LocationTile'
import { ThemeTile }    from './components/tiles/ThemeTile'
import { LinksTile }    from './components/tiles/LinksTile'
import { StackTile }    from './components/tiles/StackTile'
import { WipTile }      from './components/tiles/WipTile'
import { ProjectsTile } from './components/tiles/ProjectsTile'
import { CreditsTile }  from './components/tiles/CreditsTile'
import { LoginButton }  from './components/ui/LoginButton'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <main
      className="min-h-screen w-full px-4 pt-14 pb-8 md:px-8 md:pt-16 md:pb-10"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <LoginButton />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch" style={{maxWidth: '900px', margin: '0 auto', width: '100%',}}>

        {/* row 1 — hero + location */}
        <div className="md:col-span-7 min-h-52"><HeroTile /></div>
        <div className="md:col-span-5 min-h-52"><LocationTile /></div>

        {/* row 2 — theme + links */}
        <div className="md:col-span-4 min-h-36"><ThemeTile theme={theme} onToggle={toggle} /></div>
        <div className="md:col-span-8 min-h-36"><LinksTile /></div>

        {/* row 3 — stack + wip */}
        <div className="md:col-span-5 min-h-48"><StackTile /></div>
        <div className="md:col-span-7 min-h-48"><WipTile /></div>

        {/* row 4 — projects */}
        <div className="md:col-span-12 min-h-44"><ProjectsTile /></div>

        {/* row 5 — credits */}
        <div className="md:col-span-12 min-h-16"><CreditsTile /></div>

      </div>
    </main>
  )
}

export default App