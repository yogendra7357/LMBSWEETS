import React, { Component } from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Data from '../../Data.json';
import styled from '@emotion/styled';

interface DataItem {
  img: string[];
  name: string;
  price: string;
}

const Box3 = css`
  margin-top: 70px;
  margin-bottom: 35px;
  margin-left: 73px;
  display: flex;
  width: 75rem;
`;

const Box2 = css`
  overflow: hidden;
  position: relative;
  width: 74rem; 
  margin-left: 70px;  
  margin-bottom: 70px;  
`;

const Box1 = css`
  display: flex;
  transition: transform 1s ease-in-out;
`;

const ImageContainer = styled.div`
  overflow: hidden; 
  width: 18rem;
  height: 18rem;
  position: relative; 
`;

const StyledImage = styled.div<{ item: DataItem }>`
  width: 100%;
  height: 100%;
  background: url(${props => props.item.img[0]});
  background-size: cover;
  background-position: center;
  transition: transform 4s ease-in-out;
  position: absolute; 
  top: 0;
  left: 0;

  &:hover {
    background: url(${props => props.item.img[1]});
    background-size: cover;
    background-position: center;
    transform: scale(1.2) ;
  }
`;

const Name = {
  color: "#708090",
};

const price = {
  color: '#465352',
};

interface SliderState {
  currentIndex: number;
}

export default class Slider2 extends Component<{}, SliderState> {
  private slideInterval?: NodeJS.Timeout;

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
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow = () => {
    this.slideInterval = setInterval(() => {
      this.setState(prevState => {
        const nextIndex = (prevState.currentIndex + 1) % Data.length;
        return { currentIndex: nextIndex };
      });
    }, 6000); 
  };

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
          <Typography component='p' style={{ fontWeight: 'bold', fontSize: '23px', borderBottom: '2px solid #FFAFA3' }}>
            Best Sellers
          </Typography>

          <Box style={{ paddingLeft: '60.5rem', borderBottom: '2px solid #d3d3d3' }}>
            <IconButton onClick={this.handlePrev} sx={{ color: 'gray' }}>
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton onClick={this.handleNext} sx={{ color: 'gray' }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={Box2}>
          <Box
            sx={Box1}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Data.map((item: DataItem, index: number) => (
              <Box key={index} sx={{ padding: '0 7px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <ImageContainer>
                  <StyledImage item={item} />
                </ImageContainer>
                <Typography component='p' style={Name}>{item.name}</Typography>
                <Typography component='p' style={price}>{item.price}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </>
    );
  }
}
