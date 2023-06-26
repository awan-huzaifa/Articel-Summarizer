
import './App.css'
import Demo from './components/Demo'
import Hero from './components/Hero'

function App() {
  

  return (
    <main>
      <div className='bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-fixed animate-shimmer  text-white min-h-screen'>
        
      <Hero/>
      <Demo/>
      </div>
      </main>
  )
}

export default App
