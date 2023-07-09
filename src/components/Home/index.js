// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
    state = {isLoggedInOrLoggedOut : false}
    
    onClickButton = () => {

        const {isLoggedInOrLoggedOut}=this.state
        this.setState((prevState)=>({isLoggedInOrLoggedOut:!prevState.isLoggedInOrLoggedOut})
    )}

    render(){

        const {isLoggedInOrLoggedOut} = this.state
        return(<div className="bg-container">
        <div className="login-container">
        <Message isLoggedInOrLoggedOut={isLoggedInOrLoggedOut}/>
        {isLoggedInOrLoggedOut ? (<Logout logout={this.onClickButton}/>) : (<Login login={this.onClickButton}/>)}
        </div>
        </div>
        )
    }
}

export default Home