import '../App.css';
import React, { Component } from 'react';

class AddAnimal extends Component {
    render() {
        return (
            <div className="grid-two">
                <input type="text" name="animalSpecies" id="animalSpecies" className="animal-add animal-input" placeholder="Animal Species"/>
                <input type="text" name="animalName" id="animalName" placeholder="Animal Name" className="animal-input"/>                                        
                <div className="btn-add no-selection">Add Animal</div>
            </div>
        );
    }
}

export default AddAnimal;