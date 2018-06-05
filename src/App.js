import React from 'react';
import AnimalInfo from './containers/AnimalInfo';
import AnimalList from './containers/AnimalList';

const App = () => (
  <div className="grid">
    <h1 className="grid-intro no-selection">ZoooKeeper</h1>            
    <AnimalList />    
    <div className="grid-right">
      <h1 className="details no-selection">Details</h1>
      <AnimalInfo />
    </div> 
  </div>
);

export default App;
