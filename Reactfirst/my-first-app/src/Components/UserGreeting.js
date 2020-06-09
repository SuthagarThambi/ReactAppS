import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Suthagar</div>
        // return this.state.isLoggedIn? 
        // <div>Welcome Suthagar</div>  : <div>Welcome Gust</div>

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Suthagar</div>
        // }
        // else {
        //     return <div>Welcome Gust</div>
        // }
        //     // return (
        //     <div>
        //         <div>Welcome Suthagar</div>
        //         <div>Welcome Gust</div>
        //     </div>
        // )
    }
}

export default UserGreeting
