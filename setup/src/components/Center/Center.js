import React from 'react'
import './Center.css'

export const Center = (props) => {
    const {children} =props
  return (
    <div className='center'>{children}</div>
  )
}

export default Center;