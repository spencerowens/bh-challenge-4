import React, { Component } from 'react'

const SlideTwo = (props) => {
  let background = {
    backgroundImage: 'url(SliderImages/sign.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide" />
  // return <div className="slide" />
}
export default SlideTwo
