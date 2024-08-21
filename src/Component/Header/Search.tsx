import React, { Component } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, List, ListItem } from '@mui/material';
import Data from '../../Data.json'; 

interface Item {
  name: string;
  img:string[];
  price:string;
}

interface SearchState {
  query: string;
  searchItem: boolean;
  filteredItems: Item[];
}

export default class Search extends Component<{}, SearchState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      query: '',
      searchItem: false,
      filteredItems: Data,  
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filteredItems = Data.filter(item =>
      item.name.toLowerCase().includes(query)
    );
   if(filteredItems && query ){
    this.setState({
      query,
      filteredItems,
      searchItem: true,
    });}
    else{
        this.setState({
            query,
            filteredItems,
            searchItem: false,
          }); 
    }

  };

  render() {
    const { query, filteredItems, searchItem } = this.state;

    return (
      <Box style={{ position: 'relative', width: '18rem' }}>
        <Box style={{ position: 'relative' }}>
          <input
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
          <SearchOutlinedIcon style={{ position: 'absolute', right:6, top:10, color: 'gray', fontSize: '30px' }} />
        </Box>


      
        <List style={{ marginTop: '10px', marginLeft: '15px', maxHeight: '280px',width:'15rem', overflowY: 'auto', padding: 0 }}>
          {searchItem && filteredItems.length > 3 ? (
            filteredItems.map((item, index) => (<>
              <ListItem key={index} style={{ padding: '10px 20px', borderBottom: '1px',background:'white' }}>
                <img 
                src={item.img[0]} 
                alt={item.name} 
                style={{width:'50px',height:'50px',}}/> 

              <Box>
             <ListItem style={{ padding: '0px 10px',background:'white', color: 'gray',}}>{item.name}</ListItem>
             <ListItem style={{ padding: '0px 10px',background:'white',fontStyle:'bold',color: '#465352',}}>{item.price}</ListItem>
              </Box>

              </ListItem>
              </>))
          ) : (
            query.length > 3 && !searchItem ? (
              <ListItem>No items found</ListItem>
            ) : null
          )}
        </List>
      </Box>
    );
  }
}
