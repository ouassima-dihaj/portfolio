import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import ProjectDisplay from './pages/ProjectDisplay'
const App = () => {
  return (
   <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/projects' element= {<Projects/>} />
        <Route path='/project/:id' element={<ProjectDisplay/>}/>
        <Route path='/experience' element= {<Experience/>} />

      </Routes>
      <Footer/>
      
    </Router>

   </div>
  )
}

export default App
