import React from 'react'
import { Heading, Project } from "../components"
import { Projects } from "../constants/Projects"

function Portfolio() {
  const element = Projects.map((item) => (
    <Project
    key={item.title}
    {...item}
     />
  ))
  return (
    <section className='portfolio container'>
         <Heading 
            subheading="explore recent work"
            heading="Selected Works"
       />

       <div className="projects">
          {element}
       </div>
    </section>
  )
}

export default Portfolio