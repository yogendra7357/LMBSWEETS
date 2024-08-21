import { Box } from '@mui/material'
import React, { Component } from 'react'
import Data from '../../Data.json'

interface cartState {

}

interface cartProps{

}

export default class Cart extends Component <cartState,cartProps> {
  constructor(props : any){
    super(props)
  }


  render() {
    return (<>
        <Box>
            {Data.map((item)=>(<>
            
            
            {/* <img src={item.img[0]} alt={item.name}/> */}

            </>))}
         </Box>
  </>)}}
