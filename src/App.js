import React from "react";
import Button from './Button'
import './App.css'

const App = ()=> {
  return (
    <div className="App">
      <h1 className="heading">Hi Customer!</h1>
      <p className="question">Which Fruit do you want to buy?</p>
      <Button buttonname="Apple"/>
      <Button buttonname="Orange"/>
      <Button buttonname="Banana"/>
    </div>
  );
}

export default App;
