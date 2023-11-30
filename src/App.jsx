// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Portofolio from './pages/Portofolio'
import Notfound from './pages/Notfound'
import Experience from './pages/Experience'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/portofolio' element={<Portofolio/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
  )
}

export default App
