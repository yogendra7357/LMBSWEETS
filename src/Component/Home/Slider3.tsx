import React, { Component } from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Data from '../../Data.json';

const Box3 = css`


  margin-left: 73px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 80rem;
`;

const Box2 = css`
  overflow: hidden;
  position: relative;
  width: 80rem;
  margin-left: 70px;
  padding: 0 2rem; /
`;

const Box1 = css`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${(Data.length * 18) + 'rem'};
`;

const imageStyle = {
  width: '18rem',
  height: '18rem',
};

interface SliderState {
  currentIndex: number;
}

export default class Slider3 extends Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handlePrev = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + Data.length) % Data.length,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % Data.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <>
        <Box sx={Box3}>
          <Typography component='p' sx={{fontSize:'38px', color:'#4F4F4F', marginBottom:'15px', marginTop:'40px'}}>
            Follow us on Instagram for Latest Updates!
          </Typography>
          <Typography component='p' sx={{fontSize:'28px', color:'#4F4F4F', marginBottom:'15px'}}>@laxmimisthanbhandar</Typography>
        </Box>

        <Box 
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginBottom:'8rem',
            width: '80rem', 
          }}
        >
          <IconButton
            onClick={this.handlePrev}
            sx={{
              color: 'gray',
              position: 'absolute',
              top: '65%',
              left: '2rem', 
              transform: 'translateY(-150%)',
              zIndex: 2,
             
              padding: '0.5rem',
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box sx={Box2}>
            <Box
              sx={Box1}
              style={{ transform: `translateX(-${currentIndex * 180}rem)` }} 
            >
              {Data.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: '0 7px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={item.img[0]}
                    alt={`Slide ${index}`}
                    style={imageStyle}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <IconButton
            onClick={this.handleNext}
            sx={{
              color: 'gray',
              position: 'absolute',
              top: '50%',
              right: '-3rem', 
              transform: 'translateY(-50%)',
              zIndex: 2,
              
              padding: '0.5rem',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </>
    );
  }
}
