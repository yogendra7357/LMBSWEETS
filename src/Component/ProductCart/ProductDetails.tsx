import React, { useState } from 'react';
import { Box, Button, CardContent, CardMedia, Grid, Typography, IconButton, InputBase } from '@mui/material';
import ReviewForm from './ReviewForm';
import Data from '../../Data.json'; 
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import addToCart from '../Redux/Action';


export interface Item {
  id: number;
  img: string[];
  name: string;
  price: string;
   quantity?: string | number; 
   
}


const ProductDetails = () => {

  const { id } = useParams<{ id?: string }>(); 
  const [quantity, setQuantity] = React.useState<number>(1);
  const [product, setProduct] = React.useState<Item | null>(null);
  const dispatch = useDispatch(); 
  React.useEffect(() => {
    if (id) {
      const foundProduct = Data.find(item => item.id === parseInt(id, 10));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value, 10) || 1);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const addToCartt = () => {
  console.log("I CLICKED")
    if (product) {
      console.log("product :",product)
      dispatch(addToCart(product));
    }
  };

  return (
    product ? (
      <>
        <Box sx={{ marginTop: '30px', marginLeft: '65px' }}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <CardMedia
                component="img"
                sx={{ marginRight: '200px', padding: '20px' }}
                alt={product.name}
                image={product.img[0]}
                title={product.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '50px' }}>
                  {product.name}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '20px', marginBottom: '20px', marginTop: '10px' }}
                >
                   ₹{product.price}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid',
                      borderColor: 'grey.300',
                      borderRadius: '25px',
                      width: '90px',
                    }}
                  >
                    <IconButton onClick={decreaseQuantity} disabled={quantity === 1}>-</IconButton>

                    <InputBase
                      value={quantity}
                      onChange={handleQuantityChange}
                      sx={{
                        borderColor: 'grey.300',
                        paddingLeft: '4px',
                        textAlign: 'center',
                        width: '50px',
                      }}
                    />

                    <IconButton onClick={increaseQuantity}>+</IconButton>
                  </Box>

                  <Button variant="contained" color="primary" onClick={addToCartt}>
                    ADD TO CART
                  </Button>
                  <Button variant="contained" color="secondary">
                    BUY NOW
                  </Button>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: '20px', marginBottom: '20px' }}
                >
                  Same-day delivery within Jaipur. Expected delivery time to other places within India: 3-5 Working Days
                </Typography>
                <CardMedia
                  component="img"
                  alt="Payment Methods"
                  image="https://lmbsweets.com/wp-content/uploads/2020/07/Payment-Methods-LMB.png.webp"
                  title="Payment Methods"
                />
              </CardContent>
            </Grid>
          </Grid>
        </Box>
        <ReviewForm />
      </>
    ) : <Typography>Product not found</Typography>
  );
}

export default ProductDetails;
