import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';

class AnimalList extends Component {    
    render() {     
        return (
            <div className="grid-animal-list">                 
                {this.props.animals.map((animal, i) => <div className="card no-selection" key={i}>{animal.name}</div>)}
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