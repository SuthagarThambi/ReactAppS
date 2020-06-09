import React from 'react'

function ChildCompnent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Parent to Chid</button> */}

            <button onClick={()=>props.greetHandler('Child')}>Chid to Parent</button>
        </div>
    )
}

export default ChildCompnent
