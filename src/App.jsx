import './App.css'
import './components/Profile'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Info from './components/Info'
import Employment from './components/Employment'

function App() {


  return (
    <>
      <Nav />
      <main className='mainContent'>
          <Profile />
          <div>
            <Info />
          </div>
      </main>
    </>
  )
}

export default App
