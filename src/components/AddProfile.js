import React, {Component} from 'react';
import Aux from '../hoc/Aux';

class AddProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            bio : '',
            age : ''
        }
    }   

    nameChangeHandler = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    bioChangeHandler = (e) => {
        this.setState({
            bio : e.target.value
        });
    }


    ageChangeHandler = (e) => {
        this.setState({
            age : e.target.value
        });
    }

    handleClick = () => {
        let newProfile = {
            name : this.state.name,
            bio : this.state.bio,
            age : this.state.age
        }
    
        this.props.addUser(newProfile);
    }

    render(){
        return(
            <Aux>
            <p>Name: <input type='text' onChange = {this.nameChangeHandler}
            value = {this.state.name}/> </p>
            <p>age : <input type='text' onChange = {this.ageChangeHandler}
            value = {this.state.age}/> </p>
            <p>bio : <input type='text' onChange = {this.bioChangeHandler}
            value = {this.state.bio}/></p>
            <br />
            <button onClick = {this.handleClick} >Add USER </button>
            </Aux>
        );
    }

} 
export default AddProfile;