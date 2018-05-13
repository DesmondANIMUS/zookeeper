import '../../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';

class AnimalList extends Component {    
    render() {        
        return (
            <div className="grid-header">
                <h2 className="card no-selection light-text">Hello! Welcome to Animal List!!</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.animals)
    return {
        animals: state.animals
    }
}

export default connect(mapStateToProps)(AnimalList);