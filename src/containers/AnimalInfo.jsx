import "../App.css";
import React from 'react';
import {connect} from 'react-redux';

const AnimalInfo = props => (
    <div>
        <p className="details">{props.selected ? "Name:  " + props.selected.name : "Hover over an animal's name to get their info."}</p>
        <p className="details">{props.selected ? "Species:  " + props.selected.species : "We will provide their name and species here ^.^"}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        selected: state.selectedAnimal
    }
}

export default connect(mapStateToProps)(AnimalInfo);