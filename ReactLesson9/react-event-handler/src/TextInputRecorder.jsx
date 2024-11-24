import React, { useState } from 'react';
import './App.css';

const TextInputRecorder = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newText = event.target.value; 
    setText(newText);
    console.log(newText);
  };

  return (
    <div className="text-input-container">
      <h3>Enter text below:</h3>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TextInputRecorder;