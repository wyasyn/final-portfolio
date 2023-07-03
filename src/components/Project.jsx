import React from 'react'
import { Link } from 'react-router-dom'

function Project({img, title, description, url,}) {
  return (
    <div className='card'>
        <Link to={url}> 
        <img 
        src={img}
        alt={title}
        />
        <div className="hello">
        <h3>
             {title}
        </h3>
            <p>
                 {description}
            </p>
        </div>
        </Link>
    </div>
  )
}

export default Project