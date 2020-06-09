import React from 'react'

function FunctionClick() {
    const ClickHandler=()=>{
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
