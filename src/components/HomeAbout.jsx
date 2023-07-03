import React from 'react'
import { Cta } from "../components"

function HomeAbout() {
  return (
    <div className='about'>
          <div className="container">
          <div className="col-1">
                <h2>
                    About Me.
                </h2>
            </div>
            <div className="col-2">
                <p>
                    My name is Yasin Walum and I’m a full-time web developer with more than a decade of experience.
                    I specialise in creating minimalist, clean and high-converting web experiences for web and mobile.
                    I am very passionate about improving web development and continuously learning new things to ensure I offer you the best.
                </p>
            </div>
          </div>
          <div className="buttons">
            <Cta 
            url="/about"
            text="More"
            />
          </div>
    </div>
  )
}

export default HomeAbout