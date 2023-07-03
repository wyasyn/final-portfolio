import React from 'react'
import { Link } from 'react-router-dom'

function Cta({url, text}) {
  return (
    <>
    <Link to={url} className='button' >
        {text}
    </Link>
    </>
  )
}

export default Cta