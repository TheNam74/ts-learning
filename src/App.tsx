import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Props/Greet';
import { PersonsList } from './components/Props/PersonsList';
import { Status } from './components/Props/Status';
import { Container } from './components/Props/Container';
import { Vishwas } from './components/Props/Vishwas';
import { MyButton } from './components/Props/MyButton';
import { MyInput } from './components/Props/MyInput';
import { LoggedIn } from './components/LoggedIn';
import { LoggedIn2 } from './components/LoggedIn2';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { List } from './components/List';

function App() {
  // const names=[
  //   {first:"Nguyen",last:"Nam"},
  //   {first:"Tran",last:"Toan"},
  //   {first:"Nguyen",last:"Tung"},
  // ]
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('Component mounted');
  //   return () => {
  //     console.log('Component unmounted');
  //   }
  // }, []);


  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}
    <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
    </div>
  );
}

export default App;


// {/* simple props */}
// <Greet name='nam' isLoggedIn={true} messageCount={10}></Greet>
// <PersonsList names={names}></PersonsList>

// {/* literals string props  (enum iss okay but literal is easier)*/} 
// <Status status="Success"/>

// {/* children props */}
// <Container><h2>ok</h2></Container>

// {/* options props:  some props dont have to be passed all the times*/}
// <Vishwas name='Nam' isLoggedIn={true} messageCount={11}></Vishwas>

// {/* event props */}
// <MyButton handleClick={(event)=>console.log("button clicked",event)}></MyButton>

// <MyInput value="" handleChange={event=>console.log(event)}></MyInput>

// {/* styles porps */}
// <Container styles={{border: '1px solid red'}}><h2>ok</h2></Container>


// {/* video 8 ====================================================================================================
//   - export and import type to reuse it in multiple place <typename className="type js"></typename>
//   - prop can be defined and desructure at the same time

// */}

// {/* video 9->  useState =======================================================================================
//  - when set initial state, TS assump the type for that state.(so called type inference)
//  eg. if you you set initial state to null then later set that state to something, there's be error
// */}
// {/* video 10 ==================================================================================================*/} 
// <LoggedIn></LoggedIn>

// {/* video 11 use type insertion to  get rid of annoying optional chains ========================================
//   - In some cases, you know that the object will never be null as soon as the component mount.
// */}

// <LoggedIn2></LoggedIn2>

// {/* video 12: useReducer =======================================================================================
//   - Easier to manage complex state as 1 object
//   - If your component needs to respond to multiple actions that can change its state, useReducer can be a better choice(switch case instead of bunch of function)
//   - When you call dispatch with an action object, React will pass that object as the second argument to the reducer function that was passed to useReducer
  
// */}

// {/* video 13:  discriminate union type đơn giản là type được tạo từ 3 interfcae cùng 1 trường shape, circle chỉ đc truy cập radius, rectangle thì chỉ đc truy cập width, height */}

// useEffect takes 2 agr: the call back function and the dependencies array. used to initialize the component state, fetch data, set event listener,..side effects
  // the callback function exe when component mounted (first rendered) and when the dependencies array changed
  //unmount: useEffect hook return cleanup function , execute when unmounted

  //Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup

