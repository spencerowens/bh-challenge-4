import React, { Component } from 'react'

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i className="left" />
    </div>
  )
}

export default LeftArrow
