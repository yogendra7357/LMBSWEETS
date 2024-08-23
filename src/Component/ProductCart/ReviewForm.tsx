import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

interface ReviewFormState {
  rating: number;
}

class ReviewForm extends Component<{}, ReviewFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  render() {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            maxWidth: '100rem',
            margin: 'auto',
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            paddingTop: '20px',
          }}
        >
          <Box sx={{ marginRight: '20rem' }}>
            <Typography sx={{ fontSize: '15px',paddingLeft:'15px',paddingTop:'20px',marginBottom:'20px', marginLeft:'60px'}} variant="h6">
              Reviews
            </Typography>
            <Typography sx={{ fontSize: '20px', width: '440px', paddingLeft:'15px' , marginLeft:'60px'}} variant="h6">
              There are no reviews yet.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Be the first to review "Special Flavour of Pink City Hamper"
            </Typography>
            <Typography variant="body2" gutterBottom>
              Your email address will not be published. Required fields are marked *
            </Typography>

            <TextField
              label="Your Name *"
              name="name"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Your Email *"
              name="email"
              fullWidth
              margin="normal"
            />

            <Box sx={{ margin: '16px 0' }}>
              <Typography variant="body1" gutterBottom>
                Rating:
              </Typography>
              <Rating
                name="rating"
                value={this.state.rating}
                onChange={(event, newValue) => {
                  this.setState({ rating: newValue ?? 0 });
                }}
                max={5}
                size="large"
              />
            </Box>

            <TextField
              label="Your Review *"
              name="review"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="saveInfo"
                  color="primary"
                />
              }
              label="Save my name, email, and website in this browser for the next time I comment."
              sx={{ marginY: 2 }}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default ReviewForm;
