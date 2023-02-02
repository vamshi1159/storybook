import React from 'react'
import './Input.css';
export const Input = (props) => {
    const {size,...ref}= props;
    console.log(size)
  return (
    <input className={`input ${size}`} {...ref}  />
  )
}

export default Input;