import React from 'react'
import {Cta, Heading, Project} from '../components'
import {HomeProjects} from '../constants/HomeProjects'

function HomeServices() {
    const element = HomeProjects.map((item) => (
        <Project 
        key={item.img}
            {...item}
         />
    ))
  return (
    <div className='services container'>
        <Heading 
        subheading="explore recent work"
        heading="Selected Works"
        />
        <div className="service">
           {element}
        </div>
    <div className="buttons">
    <Cta 
        url="/portfolio"
        text="See more"
         />
    </div>
    </div>
  )
}

export default HomeServices