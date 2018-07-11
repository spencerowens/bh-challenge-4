import React, { Component } from 'react'

const SlideThree = (props) => {
  let background = {
    backgroundImage: 'url(SliderImages/arches.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide" />
  // return <div className="slide"></div>
}
export default SlideThree
