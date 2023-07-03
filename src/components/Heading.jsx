import React from 'react'

function Heading({subheading, heading}) {
  return (
    <div className='heading'>
        <strong>
            {subheading}
        </strong>
        <h2 className='title'>
            {heading}
        </h2>
    </div>
  )
}

export default Heading