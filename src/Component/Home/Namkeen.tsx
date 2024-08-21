import React, { Component } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { withStyles, WithStyles } from '@mui/styles';
import namkeenImage from '../../img/namkeen_shelf_v2.png (1).webp';
import cookiesImage from '../../img/Untitled-1.png.webp';
import papadImage from '../../img/Untitled-2.png.webp';
import acharImage from '../../img/TBBbJg1vB5.jpg.webp';
import sharbatImage from '../../img/MEcq4vXd6X.jpg.webp';
import giftCardImage from '../../img/Gift-Card-2.jpeg';
import supariImage from '../../img/supari.jpg';




const styles = {
    root: {
        flexGrow: 1,
        padding: '20px',
        background: 'linear-gradient(#FFFFFF,#FFAFA3)',
    },

    gridContainer: {
        display: 'flex',
        marginTop: '45px',
        padding: '10px',
        paddingBottom: '40px',
        textAlign: 'center' as 'center',

    },
    image: {
        width: '83%',
        height: 'auto',
        background: 'transparent',
        marginLeft:"15%"
    },
};

interface Props extends WithStyles<typeof styles> {}

class Namkeen extends Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant='h4' style={{ display: 'flex', justifyContent: 'center' }}>NAMKEEN</Typography>

                {/* Namkeen Section */}



                <Box className={classes.gridContainer}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "relative", left:"100px" }}>
                        <div style={{ background: "pink", borderRadius: "100px", width: "8px", height: "8px" }} ></div>
                        <div style={{ height: "300px", border: "1px solid #FFAFA3", borderStyle: "dashed", width: "2px" }}> </div>
                        <div style={{ background: "pink", borderRadius: "100px", width: "8px", height: "8px" }} ></div>
                    </div>

                    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: "absolute",marginTop:"130px" }}>
                        <Box>
                            <Button
                                style={{ backgroundColor: "#3A5A4F", color: "white", width: '140px', fontWeight: 'bold', marginBottom: '45px' }}
                                variant="contained"
                            >Desi Ghee</Button>
                        </Box>

                        <Box>
                            <Button
                                style={{ backgroundColor: "#3A5A4F", color: "white", width: '200px', fontWeight: 'bold', marginBottom: '45px' }}
                                variant="contained"  >Dry-Fruit Namkeen</Button>
                        </Box>

                        <Box>
                            <Button
                                style={{ backgroundColor: "#3A5A4F", color: "white", width: '150px', fontWeight: 'bold', marginBottom: '45px' }}
                                variant="contained"  >Maida Snacks</Button>
                        </Box>

                    </Box>


                    <Box >
                        <img
                            src={namkeenImage}
                            alt="Namkeen"
                            className={classes.image}
                        />
                    </Box>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "relative", left:55 , bottom:20 }}>
                        <div style={{ background: "pink", borderRadius: "100px", width: "8px", height: "8px" }} ></div>
                        <div style={{ height: "300px", border: "1px solid #FFAFA3", borderStyle: "dashed", width: "2px" }}> </div>
                        <div style={{ background: "pink", borderRadius: "100px", width: "8px", height: "8px" }} ></div>
                    </div>


                    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '40px' }}>
                        <Box >
                            <Button style={{ backgroundColor: "#3A5A4F", color: "white", fontWeight: 'bold', marginBottom: '45px' }} variant="contained">Mixture</Button>
                        </Box>
                        <Box >
                            <Button style={{ backgroundColor: "#3A5A4F", color: "white", fontWeight: 'bold', marginBottom: '45px' }} variant="contained">Roasted</Button>
                        </Box>
                        <Box >
                            <Button style={{ backgroundColor: "#3A5A4F", color: "white", fontWeight: 'bold', marginBottom: '45px' }} variant="contained">Wafer</Button>
                        </Box>
                    </Box>
                </Box>


                {/* Home Essentials Section */}

                <Box style={{
                    marginTop: '70px',
                    marginBottom: '30px',
                    marginLeft: '63px',
                    display: 'flex',
                    width: '75rem',
                }}>

                    <Typography component='p' style={{ fontWeight: 'bold', fontSize: '23px', borderBottom: '2px solid #FFAFA3' }}>
                        HOME ESSENTIALS
                    </Typography>
                    <Box style={{ paddingLeft: '60.5rem', borderBottom: '2px solid #d3d3d3' }}></Box>
                </Box>


                <Box style={{ width: '78rem', marginLeft: '73px' }}>


                    <Grid container spacing={3} className={classes.gridContainer}>
                        <Box style={{ position: "relative", width: '36rem', height: '18.2rem', overflow: 'hidden' }}>
                            <img
                                src={cookiesImage}
                                style={{ width: '36rem', height: '21.2rem', }}
                                alt="Cookies"
                                className={classes.image}
                            />
                            <Button style={{ backgroundColor: "White", color: "gray", width: '9rem', position: "absolute", left: 400, bottom: 30 }}
                                variant="contained" > SHOP COOKIES</Button>
                        </Box>

                        <Box style={{ position: "relative", marginLeft: '20px', width: '18.2rem', height: '18.2rem', overflow: 'hidden' }} >
                            <img
                                src={acharImage}
                                style={{ width: '18.2rem', height: '18.2rem', }}
                                alt="Achar"
                                className={classes.image}
                            />

                            <Button style={{ backgroundColor: "White", color: "gray", position: "absolute", left: 45, bottom: 30 }} variant="contained" > SHOP ACHAR  </Button>
                        </Box>


                        <Box style={{ position: "relative", marginLeft: '20px', width: '18.2rem', height: '18.2rem', overflow: 'hidden' }}>
                            <img
                                src={sharbatImage}
                                style={{ width: '18.2rem', height: '18.2rem', }}
                                alt="Sharbat"
                                className={classes.image}
                            />
                            <Button
                                style={{ backgroundColor: "White", color: "gray", left: 50, bottom: 70 }}
                                variant="contained" > SHOP SHARBAT</Button>
                        </Box>

                        <Box style={{ position: "relative", marginTop: '20px', width: '36rem', height: '18.2rem', overflow: 'hidden' }} >
                            <img
                                src={papadImage}
                                style={{ width: '36rem', height: '21.2rem', }}
                                alt="Papad"
                                className={classes.image}
                            />
                            <Button style={{ backgroundColor: "White", color: "gray", width: '10rem', position: "absolute", left: 400, bottom: 30 }} variant="contained" >
                                SHOP PAPAD
                            </Button>
                        </Box>

                        <Box style={{ position: "relative", marginTop: '20px', marginLeft: '20px', width: '19.2rem', height: '19.2rem', overflow: 'hidden' }} >
                            <img
                                src={giftCardImage}
                                style={{ width: '18.2rem', height: '18.2rem', }}
                                alt="Gift Card"
                                className={classes.image}
                            />
                            <Button style={{ backgroundColor: "White", color: "gray", left: 50, bottom: 70 }}
                                variant="contained" >SEND GIFT CARD</Button>

                        </Box>

                        <Box style={{ position: "relative", marginTop: '20px', width: '19.2rem', height: '19.2rem', overflow: 'hidden' }}  >
                            <img
                                src={supariImage}
                                style={{ width: '18.2rem', height: '18.2rem', }}
                                alt="Supari"
                                className={classes.image}
                            />
                            <Button style={{ backgroundColor: "White", color: "gray", padding: '10px', fontStyle: 'bold', left: 50, bottom: 70 }}
                                variant="contained" >SHOP SUPARI</Button>
                        </Box>
                    </Grid>
                </Box>
            </div>
        );
    }
}


export default withStyles(styles)(Namkeen);
