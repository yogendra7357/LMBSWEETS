import { Box, Button,  Typography } from '@mui/material'
import React, { Component } from 'react'
import image0 from '../../img/indian_weding_v2 (1).webp'
import image1 from '../../img/since_1727_badge_golden.png'



const Box1 = {
    marginTop: '200px',
    display:'flex'
}

const Box2 = {
    marginTop: '10px',
    marginBottom: '100px',
    marginLeft: '90px',   
}

const imageStyle1 = {
    marginLeft: '8rem',
    width: '40rem',
    height:'30rem',
   
}

const imageStyle2 = {
    paddingLeft:'20rem'  
}

const btn1 = {
   backgroundColor: '#3A5A4F',
    color:'white',
    borderRadius:'25px',
    border:'2px solid #3A5A4F',
    fontSize:'12px',
    padding:'8px 17px 7px 17px',
    marginRight:'20px',
    }

    const btn2 = {
        color: 'black',
        border: '2px solid #3A5A4F',
        borderRadius: '25px',
        fontSize: '12px',
        padding: '8px 17px 7px 17px',
        '&:hover': {
            backgroundColor: '#3A5A4F',
            color: 'white',
        },
    };
const p1 = {
    color:'#a0a0a0',
    fontSize:'18px',
    padding:'3px 12px 4px 12px '
}

const p2 = {
    color:'black',
    fontSize:'45px',
    padding:'3px 12px 4px 12px',
  
}
const p3 = {
    color:'#a0a0a0',
    fontSize:'15px',
    padding:'3px 12px 4px 12px ',
    marginBottom: '50px',
  
}

interface state {

}
export default class Festive extends Component <{},state>{


    render() {
        return (<>
        <Box style={Box1}>
            <Box sx={Box2}>
                <Typography component='p' sx={p1}><img style={imageStyle2} src={image1} alt='' /><br/>LMB's Festive Packaging</Typography>
                <Typography component='p' sx={p2}>Sweets are the<br/>perfect gift for every<br/>occasion</Typography>
                <Typography component='p' sx={p3}>Be it a wedding, or for Corporate Offices.</Typography>
                <Button style={btn1}>CUSTOM ENQUIRY</Button>
                <Button sx={btn2} >WEDDING GIFTING</Button>
            </Box>

            <Box >
                <img style={imageStyle1} src={image0} alt='' />
            </Box>
            </Box>
        </>)
    }
}
