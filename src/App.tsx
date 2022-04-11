import React from 'react';
import { createBoard } from './setup';
import { Grid } from './App.styles';

const App = () => {
  console.log(createBoard());
  return (
    <div>
      <Grid>Start Here!</Grid>
    </div>
  );
};

export default App;
