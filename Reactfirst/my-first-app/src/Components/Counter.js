import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    Increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('from call back ' + this.state.count) })
        // console.log(this.state.count)
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    IncrementFive() {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    ResetCout() {
        this.setState({
            count: 0
        })

    }
    render() {
        return (
            <div>
                <h1>Count {this.state.count}</h1>
                <button onClick={() => this.IncrementFive()}>Increment</button>
                <button onClick={() => this.ResetCout()}>ResetCount</button>
            </div>
        )
    }
}
export default Counter