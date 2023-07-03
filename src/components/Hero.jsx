import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-container container">
          <div className="col-1">
            <small className='subhead'>
               H! AM
            </small>
            <h1>
                Yasin <br />
               <span>Walum</span>
            </h1>
            <p className='call'>WEB DEVELOPER</p>
        </div>
        <div className="col-2">
            <img src='img/about-me.png' alt='hero pic' />
        </div>
      </div>
    </div>
  )
}

export default Hero