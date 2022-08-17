import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
  

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


function App() {

   localStorage.setItem("user", JSON.stringify(person));

   const  av =    JSON.parse(localStorage.getItem("user"));

         console.log(av)


  return (
    <div className="App">
     hello
        <div className='new'>
             im inside the new 

        </div>


        <button   >click me   </button>
            
    <div className='newname'>get the data</div>


    </div>
  );
}

export default App;

