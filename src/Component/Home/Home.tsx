import React, { Component } from 'react'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Festive from './Festive'
import Slider3 from './Slider3'
import Namkeen from './Namkeen'

export default class Home extends Component {
  render() {
    return (
      <>
        <Slider1/>
        <Slider2/>
        <Festive/>
        <Namkeen/>
        <Slider3/>
      </>
    )
  }
}
