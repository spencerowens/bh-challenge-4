import React, { Component } from 'react'
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slideCount: 1
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
    return (
      <div className="slider">
      { this.stateslideCount === 1 ? <SlideOne /> : null }
      { this.stateslideCount === 2 ? <SlideTwo /> : null }
      { this.stateslideCount === 3 ? <SlideThree /> : null }
      <RightArrow nextSlide={this.nextSlide} />
      <LeftArrow previousSlide={this.previousSlide} />
      </div>
    );
  }
  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

}


