import React from 'react'

const Button =  ({style = "default", text, type = "submit", onClick})  => {
  return (

          <button type={type} onClick={onClick} className={`btn ${style}`}>{text}</button>
  )
}

export default Button
