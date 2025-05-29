import './App.css'
import './components/Profile'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Info from './components/Info'

function App() {

  return (
    <>
      <Nav />
      <main className='mainContent'>
          <Profile className='profileSection'/>
          <Info className='infoSection'/>
      </main>
    </>
  )
}

export default App
