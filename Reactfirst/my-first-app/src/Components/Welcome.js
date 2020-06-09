
/*Destructuring props and state*/
import React, { Component } from 'react'
class Welcome extends Component {

    render() {
        const { name, firstname } = this.props//Destructuring props and state
        //return <h1>Welcome {this.props.name} {this.props.firstname}</h1>
        return <h1>Welcome {name} {firstname}</h1>
    }
}
export default Welcome;