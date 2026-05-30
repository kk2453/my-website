import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()
  
  return (
    <div>
      <button onClick={toggle}>
        {theme == 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default App
