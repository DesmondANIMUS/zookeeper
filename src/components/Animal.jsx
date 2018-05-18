import '../App.css'
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {selectAnimal} from '../actions/actions';

class Animal extends Component {       
    onClick = () => this.props.selectAnimal(this.props.animalInfo);    
    render() {                       
        return (
            <div className="card no-selection" onClick={this.onClick}>
                {this.props.animalInfo.name}                
            </div>
        );
    }
}

export default connect(null, {selectAnimal})(Animal);