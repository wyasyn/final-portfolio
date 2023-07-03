import React from 'react'
import { Hero, HomeAbout, HomeServices, HomeSkills } from '../components'

function Home() {
  return (
    <section className='home'>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeSkills />
    </section>
  )
}

export default Home