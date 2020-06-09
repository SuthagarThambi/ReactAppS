import React, { Component } from 'react'

/*Binding Event Handlers*/

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'Hello'
         }
        // this.ClickHandler=this.ClickHandler.bind(this)
     }
    //  ClickHandler(){
    //      this.setState({
    //          message:'Good Bye'
    //      })
    //  }

    ClickHandler=()=>{
        this.setState({
            message:'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.ClickHandler()}>Click</button> */}
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
