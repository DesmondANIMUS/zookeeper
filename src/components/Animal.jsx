import '../App.css'
import React from 'react';
import {connect} from 'react-redux';
import {selectAnimal} from '../actions/actions';

const Animal = props => (
    <div className="card no-selection" onClick={() => props.selectAnimal(props.animalInfo)}>
        {props.animalInfo.name}    
    </div>
);

export default connect(null, {selectAnimal})(Animal);