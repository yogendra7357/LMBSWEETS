import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './../Header/Search';

const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <Search navigate={navigate} />
  );
};

export default MyComponent;
