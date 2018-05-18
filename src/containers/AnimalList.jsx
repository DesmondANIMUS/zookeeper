import '../App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React, { Component } from 'react';
import Animal from '../components/Animal';
import {selectAnimal} from '../actions/actions';

class AnimalList extends Component {        
    setAnimal = animalInfo => this.props.selectAnimal(animalInfo);
    render() {             
        if (this.props.selected) console.log("species: ", this.props.selected);
        if (!(this.props.selected)) console.log(this.props.selected)
        return (
            <div className="grid-animal-list">                 
                {this.props.animals.map((animal, i) => <Animal key={i} setAnimal={this.setAnimal} animalInfo={animal}/>)}
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectAnimal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);