import '../App.css'
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Animal extends Component {   
    static propTypes = {
        selectAnimal: PropTypes.func.isRequired
    }     
    onClick = () => this.props.selectAnimal(this.props.animalInfo);    
    render() {                       
        return (
            <div className="card no-selection" onClick={this.onClick}>
                {this.props.animalInfo.name}                
            </div>
        );
    }
}

export default Animal;