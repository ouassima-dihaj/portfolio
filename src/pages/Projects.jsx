import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from "../helpers/ProjectList";
import "../styles/Projects.css"
const Projects = () => {
  return (
    <div className='projects'>
      <h1>my personal Projects </h1>
    {ProjectList.map((proj,index)=>{
        return <ProjectItem index={index} name={proj.name} image={proj.image} skills={proj.skills}/>
    })}

    </div>
  )
}

export default Projects
