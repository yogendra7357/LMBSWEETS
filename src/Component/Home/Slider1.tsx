import React, { Component } from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import image0 from '../../img/Rakhi-website-banner-2024.jpg';
import image1 from '../../img/2.jpg';
import image2 from '../../img/Teej-website-banner-2024 (1).jpg';

const Box1 = css` 
  overflow: hidden;
  position: relative;
  width: 84.5rem; 
`;
const Box2 = css`
  display: flex;
  transition: transform 0.5s ease-in-out; 
`;


const imageStyle = {
  width: '84.5rem',
  height: 'auto',
};

interface SliderState {
  currentIndex: number;
}

const images = [image0, image1, image2];

class Slider1 extends Component<{}, SliderState> {
  private Slide?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.startSlideShow();
  }

  componentWillUnmount() {
    if (this.Slide) {
      clearInterval(this.Slide);
    }
  }

  startSlideShow = () => {
    this.Slide = setInterval(() => {
      this.setState(prev => ({
        currentIndex: (prev.currentIndex + 1) % images.length,
      }));
    }, 3000); 
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <Box sx={Box1}>
        <Box
          sx={Box2}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <img style={imageStyle} src={item} alt={`Slide ${index}`} key={index} />
          ))}
        </Box>
      </Box>
    );
  }
}

export default Slider1;
