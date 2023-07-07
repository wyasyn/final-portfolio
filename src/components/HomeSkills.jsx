import React from 'react'
import { Cta, Heading, SkillCard} from "../components"
import { HomeSkill } from "../constants/HomeSkill"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function HomeSkills() {
    const skills = HomeSkill.map((item) => (
        <SkillCard 
        key={item.title}
        {...item}
        />
    ))
  return (
    <div className='skills container'>
         <Heading 
        subheading="fields of work"
        heading="What can I do for you?"
        />

          <div className="slider-container">
          <Carousel className='slider' >
             {skills}
          </Carousel>
          </div>

       <div className="buttons">
       <Cta
        url="/services"
        text="More"
         />
       </div>

    </div>
  )
}

export default HomeSkills