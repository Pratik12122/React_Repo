import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Profile extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Hi this is {this.props.name}. My age is {this.props.age} and i am {this.props.bio}</p>
            </div>
        )
    }
}

class MyApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profiles : [
                {name:'Pratik',
                 age:'25',
                 bio:'Java dev and crypto trader'
                },
                {name:'Aruna',
                 age:'28',
                 bio:'HR @Ness'
                }
            ]
        }
    }
    
    render(){
        let profile1 = this.state.profiles[0]
        let profile2 = this.state.profiles[1]
        let profiles = this.state.profiles.map(profile => {
            return  <Profile name={profile.name}
                        age={profile.age}
                        bio={profile.bio}/>
        })
        return (
            <div>
                {profiles}
            </div>
        )
    }
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Wow {'\u2728'}</h2>
  </div>
);

render(<MyApp />, document.getElementById('root'));
