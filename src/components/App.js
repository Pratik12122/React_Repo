import React from 'react';
import Aux from '../hoc/Aux';
import Profile from './profile.jsx';
import AddProfile from './AddProfile';

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
    
    addUser = (user) => {
        this.setState({
                profiles : this.state.profiles.concat([user])
        });
    }
    
    render(){
        let profiles = this.state.profiles.map((profile,index) => {
            return  <Profile name={profile.name}
                        age={profile.age}
                        bio={profile.bio}
                        key={index}/>
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
