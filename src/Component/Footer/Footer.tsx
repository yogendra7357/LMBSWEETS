import React, { Component } from 'react';
import { TextField, IconButton, Box, Typography } from '@mui/material';
import {
    Search as SearchIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    Pinterest as PinterestIcon,
    LinkedIn as LinkedInIcon,
    LocationOn as LocationOnIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';

interface FooterProps { }
interface FooterState { }

class Footer extends Component<FooterProps, FooterState> {
    render() {
        return (
            <>
                <footer
                    style={{ display: 'flex', backgroundColor: '#3B5B50', color: 'white', padding: '20px 0 0 90px '  }}>

                    <Box
                        style={{ display: 'flex', marginTop:'30px', flexDirection: 'column', width: '620px', }}>

                        <img
                            style={{ width: '150px' }} src="https://lmbsweets.com/wp-content/uploads/2020/09/LMB-logo-footer.png"
                            alt="LMB Logo" />

                        <Typography
                            variant="body1"
                            style={{ margin: '20px 0', fontSize:'14px',color: '#d3d3d3' }}>
                            LMB’s sweets are Jaipur’s pride and are famous all over the world. Its patrons are spread throughout the globe. LMB has created a unique brand and has established itself in Sweets, Namkeens, Chat & traditional Rajasthani delicacies.
                        </Typography>

                        <Typography variant="body1" style={{ margin: '1px 10px',fontSize:'13px',color: '#d3d3d3' }}>
                            <LocationOnIcon />Johari Bazar | Vaishali Nagar
                        </Typography>

                        <Typography variant="body1" style={{ margin: '1px 10px',fontSize:'13px',color: '#d3d3d3' }}>
                            <PhoneIcon />+91 9024609609
                        </Typography>

                        <Typography variant="body1"style={{ margin: '1px 10px 80px 10px' ,fontSize:'13px',color: '#d3d3d3'}}>
                            <EmailIcon />contactus@hotellmb.com
                        </Typography>
                    </Box>

                    <Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '270px',
                                borderRadius: '100px',
                                border: '1.5px solid #d3d3d3',
                                background: 'transparent',
                                marginTop:'100px'
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search for products"
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    background: 'transparent',
                                    color: 'white',
                                    padding: '8px',
                                    borderRadius: '100px 0 0 100px',
                                    outline: 'none',
                                    fontSize: '14px',
                                   
                                }}
                            />
                            <IconButton
                                sx={{
                                    borderRadius: '0 100px 100px 0',
                                    backgroundColor: 'transform',
                                    padding: '8px'
                                }}
                            >
                                <SearchIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Box>

                        <Box style={{ display: 'flex', width: '240px', height: '40px', marginRight:'50px' ,justifyContent: 'space-between', marginTop: '20px', paddingLeft: '10px' }}>
                            <FacebookIcon className='icons' />
                            <TwitterIcon className='icons' />
                            <InstagramIcon className='icons' />
                            <PinterestIcon className='icons' />
                            <LinkedInIcon className='icons' />
                        </Box>

                    </Box>
                    <Box>
                        <Box style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: '5px', listStyleType: 'none', padding: 0 }}>
                            <Typography variant="body2">Send a Gift Card</Typography>
                            <Typography variant="body2">About Us</Typography>
                            <Typography variant="body2">Contact Us</Typography>
                            <Typography variant="body2">Track Your Order</Typography>
                            <Typography variant="body2">Custom Enquiry</Typography>


                            <Typography variant="body2">Shipping & Cancellation Policy</Typography>
                            <Typography variant="body2">Privacy Policy</Typography>
                            <Typography variant="body2">Terms & Conditions</Typography>
                        </Box>
                    </Box>
                </footer>
                <Box 
                  style={{ position: 'relative', display: 'flex', backgroundColor: '#3B5B50', color: 'white', justifyContent: 'space-between', padding: '40px 90px', alignItems: 'center', height: '50px' }}>
                  <Typography 
                  variant="body2">©2024. Laxmi Misthan Bhandar. All rights reserved.</Typography>
                    
                    <img 
                    src="https://lmbsweets.com/wp-content/uploads/2020/07/Payment-Methods-LMB.png.webp" 
                    alt="Payment Methods" />

                    <Box 
                      style={{ position: 'absolute', right: '30px', bottom: '20px', backgroundColor: 'white', borderRadius: '100%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a href='#'><KeyboardArrowUpIcon style={{ color: 'black', width: '30px', height: '30px' }} /></a>
                    </Box>
                </Box>
            </>
        );
    }
}

export default Footer;
