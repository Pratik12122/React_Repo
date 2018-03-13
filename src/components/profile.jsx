import React from 'react';

export default class Profile extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Hi this is {this.props.name}. My age is {this.props.age} and i am {this.props.bio}</p>
            </div>
        )
    }
}