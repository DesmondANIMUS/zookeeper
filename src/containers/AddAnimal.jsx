import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import {addAnimal} from '../actions/actions';

class AddAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: {
                animal_name: '',
                species: ''
            }
        };
    };
    
    onChange = (e) => this.setState({
        animal: {...this.state.animal, [e.target.name]: e.target.value}
    });    

    render() {
        const {animal} = this.state;
        return (
            <div className="grid-two">
                <input type="text" name="species" id="species" 
                        className="animal-add animal-input" placeholder="Animal Species" 
                        onChange={this.onChange}  value={animal.species}/>
                <input type="text" name="animal_name" id="animal_name" 
                        placeholder="Animal Name" className="animal-input"
                        onChange={this.onChange} value={animal.animal_name}/>                                        
                <div className="btn-add no-selection" onClick={() => this.props.addAnimal(animal)}>Add Animal</div>
            </div>
        );
    }
}

export default connect(null, {addAnimal})(AddAnimal);