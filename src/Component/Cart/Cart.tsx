import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/ActionT'; 
import { Item } from '../ProductCart/ProductDetails';

interface CartItem {
  id: number;
  name:string;
  img: string;
  price: number;
  quantity: number ;
}

interface CartState {
  cart: CartItem[];
}

const Cart: React.FC = () => {
  const cart = useSelector((state: CartState) => state.cart);
  console.log("cc",cart)
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch({ type: "LOAD_CART", payload: storedCart });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const incrementCart = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const decrementCart = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          height: '55vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2rem',
          color: 'gray',
        }}
      >
        Cart is Empty
      </Box>
    );
  }
  console.log('cart',cart )

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Cart Item 
      </Typography>
      {cart.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            marginBottom: 3,
            boxShadow: 3,
          }}
        >
          <img
            style={{ width: '300px', margin:'20px'}}
            src={item.img[0]}
            alt={item.name}
          />
          <CardContent  sx={{ width: '80rem', margin:'40px'}} >
            <Typography variant="h3" component="p">
              {item.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
            ₹{item.price} (GST)
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Quantity: {item.quantity}
            </Typography>
            <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
              <IconButton onClick={() => incrementCart(item.id)}>
                +
              </IconButton>
              {item.quantity}
              <IconButton onClick={() => decrementCart(item.id)}>
                -
              </IconButton>
              <IconButton onClick={() => handleRemoveCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Total: ₹{item.price * item.quantity}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          component={Link}
          to='/'
          variant="contained"
          color="primary"
          startIcon={<KeyboardBackspaceIcon />}
        >
          More Item
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
