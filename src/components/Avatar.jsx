import React from 'react'

const Avatar = (props) => {

  return (
    <img
      className="avatar"
      src={props.link}
      alt={props.alt}
      width={props.size}
      height={props.size}
    />
  )
}

export default Avatar