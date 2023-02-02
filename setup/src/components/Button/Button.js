import React from 'react'
import './Button.css';
const Button = (props) => {
    const {variant,children,...ref} = props;
    console.log(variant)
  return (
    <button className={`button ${variant}`} {...ref}>
        {children}
    </button>

  )
}

export default Button
