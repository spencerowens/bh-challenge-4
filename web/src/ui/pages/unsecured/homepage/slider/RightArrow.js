import React, { Component } from 'react'

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i className="left" />
    </div>
  )
}

export default RightArrow
