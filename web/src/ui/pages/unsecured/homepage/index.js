// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

import React, { Component } from 'react'
import Modal from './modal'
// import Slider from './slider'
// import Carousel from './react-easy-swipe'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Information Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Information about this Page</h1>
          <p>This is a bunch of information about this page</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

export default Homepage
