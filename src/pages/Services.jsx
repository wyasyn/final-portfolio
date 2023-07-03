import React from 'react'
import { Heading, SkillCard } from "../components"
import { Skills } from "../constants/Skills"

function Services() {
  const element = Skills.map((item) => (
    <SkillCard
    key={item.title}
    {...item}
     />
  ))
  return (
    <section className='services container'>
      <Heading 
      subheading="fields of work"
      heading="What can I do for you?"
       />

       <div className="skills">
          {element}
       </div>


    </section>
  )
}

export default Services