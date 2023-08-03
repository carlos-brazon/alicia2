import React from 'react'

const Invitation = ({text, url, control2}) => {

  return (
    <div className={`${control2 ? 'hidden': ''}`}>
        <img className='w-40 h-60 rounded-full' src={url} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default Invitation