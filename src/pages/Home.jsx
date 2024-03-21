import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Home.css"
const Home = () => {
  return (
    <div  className='home'>
      <div className='about'>
        <h2>Hi!,My Name is Ouassima</h2>
        <div className="prompt">
            <p>A software develepoer with a pation for learning and creating </p>
            <LinkedIn/>
            <Email/>
            <GitHub/>
        </div>

      </div>
      <div className="skills">
        <h1>skills</h1>
        <ol className='list'>
<li className='item'>
    <h2>Front-End</h2>
    <span>reactjs,redux,html,css,bootstrab</span>
</li>
<li className='item'>
    <h2>Back-End</h2>
    <span>java Spring,mysql,php laravel</span>
</li>
<li className='item'>
    <h2>Languages</h2>
    <span>javascript,java,python,c,c++,c#,typescript</span>
</li>
        </ol>
      </div>

    </div>
  )
}

export default Home
