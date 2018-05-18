import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import Animal from '../components/Animal';

class AnimalList extends Component {        
    render() {             
        if (this.props.selected) console.log("species: ", this.props.selected);
        if (!(this.props.selected)) console.log("before change:", this.props.selected)
        return (
            <div className="grid-animal-list">                 
                {this.props.animals.map((animal, i) => <Animal key={i} animalInfo={animal}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animals: state.animals,
        selected: state.selectedAnimal
    }
}

export default connect(mapStateToProps)(AnimalList);