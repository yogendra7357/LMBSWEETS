import React, { Component } from 'react';
import UserOutlinedIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box, Typography, IconButton } from '@mui/material';
import "../../../src/App.css"
import Search from './Search';

interface HeaderState { }

class Header extends Component<{}, HeaderState> {
  render() {
    return (
      <>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "11px" }}>
            <Typography
              sx={{ borderRight: '1px solid grey', pr: 1, fontSize: "12px", marginLeft: "69px" }}>+91 9024609609</Typography>

            <Typography
              sx={{ color: "gray", fontSize: "11.8px ", mraginLift: "11px" }}>
              SAVOUR AUTHENTIC RAJASTHANI FLAVOR AT YOUR DOORSTEP.</Typography>

            <Typography
              sx={{ borderLeft: '1px solid grey', pl: 1, color: "gray", fontSize: "11.8px ", marginRight: "88px" }}>
              DELIVERY ALL ACROSS INDIA & WORLDWIDE</Typography>

          </Box>




          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <Box sx={{ marginLeft: '78px', marginTop: "17px" }}>
              <img
                style={{ height: "75px", width: "168px" }}
                src="https://lmbsweets.com/wp-content/uploads/2020/09/LMBLogoUpdated.png.webp"
                alt="Logo" />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginRight: "90px", marginTop: "17px", alignItems: 'center' }}>

              <Box
                style={{
                  position: 'absolute',
                  top: '60px',
                  right: '14rem',
                  zIndex: 1
                }}>
                <Search />
              </Box>

              <IconButton><UserOutlinedIcon /></IconButton>
              <IconButton><ShoppingBagIcon /></IconButton>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>₹ 0,00</Typography>
            </Box>
          </Box>


          <Box sx={{ backgroundColor: '#FFAFA3', display: 'flex', justifyContent: 'space-around', height: '54px', alignItems: 'center', }}>

            <Box sx={{ display: 'flex', fontSize: "10px", width: '700px', marginRight: "18rem" }}>

              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', '&:hover': { color: 'gray' }, fontSize: "13px", color: "#3A5A4F", fontWeight: 'bold', marginRight: '22px', marginLeft: '30px' }}>Home</Typography>
              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', fontSize: "13px", color: "#3A5A4F", marginRight: '22px', fontWeight: 'bold' }}>Sweets</Typography>

              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', fontSize: "13px", color: "#3A5A4F", marginRight: '22px', fontWeight: 'bold' }}>Namkeen</Typography>

              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', fontSize: "13px", color: "#3A5A4F", marginRight: '22px', fontWeight: 'bold' }}>Rajasthani Delight</Typography>

              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', fontSize: "13px", color: "#3A5A4F", marginRight: '22px', fontWeight: 'bold' }}>Gifting</Typography>

              <Typography component="a" href="#"
                sx={{ textDecoration: 'none', fontSize: "13px", color: "#3A5A4F", marginRight: '22px', fontWeight: 'bold' }}>Teej & Rakhi Special</Typography>

            </Box>
            <Typography sx={{ marginRight: "60px", fontSize: "14px", fontWeight: 'bold' }}>JAIPUR DELIVERY</Typography>
          </Box>

          <Box sx={{ backgroundColor: '#3A5A4F', display: 'flex', overflow: 'hidden', border: 'gray', width: '100%', alignItems: 'center', justifyContent: 'center', height: '43px', zIndex: 9999 }}>

            <Typography sx={{ pr: 1, color: 'white', fontSize: "14px", }}>
              Freshness & Hygiene Assured | No Chemical Preservatives | Ultra Long Shelf Life</Typography>

          </Box>
        </Box>
      </>
    );
  }
}

export default Header;
