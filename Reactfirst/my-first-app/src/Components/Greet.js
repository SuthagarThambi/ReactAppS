import React from 'react'

// function Greet(){
//     return <h1>Hello Suthagar</h1>
// }
// const Greet=()=><h1>Hello Suthagar</h1>;
// export default Greet;

// export const Greet=(props)=>{
// return(
//     <div>
//         <h1>Hello {props.name} {props.firstname}</h1>
//         {props.children}
//     </div>
// )
// }

/*Destructuring props and state*/
// export const Greet=({name,firstname})=>{
// return(
//     <div>
//         <h1>Hello {name} {firstname}</h1>
//         {/* {props.children} */}
//     </div>
// )
// }

export const Greet=(props)=>{
    const {name,firstname}=props
    return(
        <div>
            <h1>Hello {name} {firstname}</h1>
            {/* {props.children} */}
        </div>
    )
    }