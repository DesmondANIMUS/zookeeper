import '../App.css';
import {connect} from 'react-redux';
import AddAnimal from './AddAnimal';
import React, { Component } from 'react';
import Animal from '../components/Animal';
import {getAnimals} from '../actions/actions';

class AnimalList extends Component {        
    componentWillMount() {
        this.props.getAnimals();
    }
    render() {                    
        const renderAnimals = () => {
            if (!this.props.animalList) return this.props.animals.map((animal, i) => <Animal key={i} animalInfo={animal}/>)
            else return this.props.animalList.map((animal, i) => <Animal key={i} animalInfo={animal}/>)
        }
        return (
            <div className="grid-animal-list" id="animal-grid">
                <AddAnimal />                              
                <div className="btn card no-selection" onClick={() => this.props.getAnimals()}>Fetch Data</div>
                {renderAnimals()}                
                <div className="btn card no-selection" onClick={() => this.props.getAnimals()}>Fetch Data</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animals: state.animals,
        animalList: state.animalList
    }
}
 
export default connect(mapStateToProps, {getAnimals})(AnimalList);