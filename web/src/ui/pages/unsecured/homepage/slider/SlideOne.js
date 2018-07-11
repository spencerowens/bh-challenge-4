import React, { Component } from 'react'

const SlideOne = (props) => {
  let background = {
    backgroundImage: 'url(SliderImages/camp.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide" />
}
export default SlideOne
