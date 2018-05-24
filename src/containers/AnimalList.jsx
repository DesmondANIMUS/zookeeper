import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import Animal from '../components/Animal';
import {getAnimals} from '../actions/actions';

class AnimalList extends Component {        
    render() {            
        return (
            <div className="grid-animal-list">                 
                <div className="btn card no-selection" onClick={() => this.props.getAnimals()}>Fetch Data</div>
                {this.props.animals.map((animal, i) => <Animal key={i} animalInfo={animal}/>)}                
                <div className="btn card no-selection" onClick={() => this.props.getAnimals()}>Fetch Data</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animals: state.animals
    }
}

export default connect(mapStateToProps, {getAnimals})(AnimalList);