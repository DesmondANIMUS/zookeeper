import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import Animal from '../components/Animal';

class AnimalList extends Component {    
    render() {     
        return (
            <div className="grid-animal-list">                 
                {this.props.animals.map((animal, i) => <Animal key={i} animalInfo={animal}/>)}
            </div>
        );
    }
}

function mapStateToProps(state) {    
    return {
        animals: state.animals
    }
}

export default connect(mapStateToProps)(AnimalList);