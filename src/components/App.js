import React from 'react';
import { render } from 'react-dom';
import Aux from '../hoc/Aux';
import Profile from './profile.jsx';
import AddProfile from './AddProfile';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profiles : [
                {name:'Pratik',
                 age:'25',
                 bio:'Java dev and crypto trader'
                },
                {name:'Bob',
                 age:'28',
                 bio:'Java Lead @Ness'
                }
            ]
        }
    }
    
    addUser = (e) => {
        var user = {
                 name:'Max',
                 age:'30',
                 bio:'Front End Dev with react & redux' 
        }
        this.setState({
                profiles : this.state.profiles.concat([user])
        });
    }
    
    render(){
        let profiles = this.state.profiles.map(profile => {
            return  <Profile name={profile.name}
                        age={profile.age}
                        bio={profile.bio}/>
        })
        return (
            <Aux>
                {profiles}
                <AddProfile addUser = {this.addUser}/> 
            </Aux>
        )
    }
}
export default App;
