import React from 'react'

function SkillCard({img, text, title, subtitle}) {
  return (
    <div className='Skill-card'>
        <img src={img} alt={title} />
        <div class="content">
            <strong>
                 {subtitle}
            </strong>
            <h2>
                {title}
            </h2>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default SkillCard