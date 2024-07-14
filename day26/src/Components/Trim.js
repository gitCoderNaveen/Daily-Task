// The .trim() function in JavaScript is used to remove whitespaces from both ends of a String
// Spread Operator 

import React, { useState } from 'react'

export default function Trim() {
    const fruit = ['apple', 'mango', 'banana', 'gova', 'blueberry']
    const [input, setInput] = useState('');

    const handleInputChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const trimmedInput = input.trim();
        console.log(trimmedInput);
        // console.log(input);
    }

    const submitFruits=()=>{
        const fruits = [fruit[2]]
        console.log(fruits)
    }


  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}/>
      <button type='submit' onClick={handleSubmit}>Submit</button>
      <button onClick={submitFruits}>Submit</button>
    </div>
  )
}




