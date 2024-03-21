import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import Reorder from "@mui/icons-material/Reorder"
const Navbar = () => {
    const [value,setValue]=useState(false);
    const toggleNavbar=()=>{
        setValue(!value);
    }
  return (
    <div className="navbar"  id={value ? "open":"close"}>
      <div className='toggleButton'>
        <button onClick={toggleNavbar}>
            <Reorder></Reorder>
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Project</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  )
}

export default Navbar
