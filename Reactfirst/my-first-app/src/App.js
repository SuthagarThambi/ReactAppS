import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import { Greet } from './Components/Greet';
import Welcome from './Components/Welcome';
// import Welcome from './Components/Welcome';
// import Hello from './Components/Hello';
import Message from './Components/Mesage'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'

function App() {
  return (
    // <div className="App" >
    //   <Counter></Counter> */}
    //   <Message></Message>

    //   <Greet name='Suthagar' firstname='T'>
    //     <p>This is the Children</p>
    //   </Greet>
    //   <Greet name='Thambikannu' firstname='S'>
    //     <button>Action</button>
    //   </Greet>


    //   <Hello></Hello>
    //   <Welcome name='Suthagar' firstname='T'></Welcome>
    //   <Welcome name='Thambikannu' firstname='S'></Welcome>
    //   <Greet name='Nayomi' firstname='S' />
    // </div>

    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}

      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      <NameList></NameList>
    </div>
  );
}

export default App;
