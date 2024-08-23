import React, { Component } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, List, ListItem, Typography } from '@mui/material';
import Data from '../../Data.json'; 

interface Item {
  id: number; 
  name: string;
  img: string[];
  price: string;

}

interface SearchState {
  query: string;
  filteredItems: Item[];
  someKey : boolean
}

interface SearchProps {
  navigate: (path: string) => void; 
}

export default class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      query: '',
      filteredItems: Data, 
      someKey : true 
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filteredItems = Data.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    this.setState({
      query,
      filteredItems
      
    });
    this.setState({ someKey: true });

  };

  handleItemClick = (id: number) => {
    this.props.navigate(`/product/${id}`);
    this.setState({ someKey: false });
    
  };

  render() {
    const { query, filteredItems ,someKey} = this.state;

    return (
      <Box style={{ position: 'relative', width: '18rem' }}>
        <Box style={{ position: 'relative' }}>
          <input
            aria-label="Search for products"
            placeholder="Search for products"
            value={query}
            onChange={this.handleChange}
            style={{     
              borderRadius: '25px',
              width: '100%', 
              paddingRight: '40px', 
              paddingLeft: '20px', 
              boxSizing: 'border-box',
              height: '48px',
              border: '2px solid #d3d3d3', 
              outline: 'none',
              fontSize: '16px'
            }}
          />
          <SearchOutlinedIcon style={{ position: 'absolute', right: 6, top: 10, color: 'gray', fontSize: '30px' }} />
        </Box>

        <List style={{ marginTop: '10px', marginLeft: '15px', maxHeight: '280px', width: '15rem', overflowY: 'auto', padding: 0 }}>
          { query.length > 0 && filteredItems.length > 0 ? (

           someKey && filteredItems.map((item) => (
              <ListItem 
                key={item.id}
                style={{ padding: '10px 20px', borderBottom: '1px solid #d3d3d3', background: 'white', cursor: 'pointer' }}
                onClick={() => this.handleItemClick(item.id)}
              >
                <img 
                  src={item.img[0]} 
                  alt={item.name} 
                  style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                />
                <Box>
                  <Typography variant="body1" style={{ color: 'gray' }}>{item.name}</Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold', color: '#465352' }}>{item.price}</Typography>
                </Box>
              </ListItem>
            ))
          ) : query.length > 0 ? (
            <ListItem sx={{backgroundColor:'white'}}>No items found</ListItem>
          ) : null}
        </List>
      </Box>
    );
  }
}
