import '../App.css'
import React, { Component } from 'react';

class Animal extends Component {
    onFocus = () => console.log("test hover");
    render() {
        return (
            <div className="card no-selection" onMouseEnter={this.onFocus}>
                {this.props.animalInfo.name}
            </div>
        );
    }
}

export default Animal;