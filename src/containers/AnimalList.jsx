import '../App.css';
import {connect} from 'react-redux';
import React, { Component } from 'react';

class AnimalList extends Component {    
    render() {     
        return (
            <div className="grid-header">indian 
                <h2 className="card no-selection light-text">Hello! Welcome to Animal List!!</h2>
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