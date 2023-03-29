import React from 'react';
// import './App.css';

//use type when when creating applications
//use interface when creating libraries
type GreetProps={
    name:string
    messageCount:number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps)=>{
  return (
    <div className="Greet">
      welcome {props.name}
    </div>
  );
}

export default Greet;
