import React from 'react';
import AnimalInfo from './containers/AnimalInfo';
import AnimalList from './containers/AnimalList';

const App = () => (
  <div className="grid">
    <h2 className="grid-intro no-selection">ZoooKeeper</h2>
    <AnimalList/>    
    <div className="grid-right">
      <h1 className="details no-selection">Details</h1>
      <AnimalInfo />
    </div> 
  </div>
);

export default App;
