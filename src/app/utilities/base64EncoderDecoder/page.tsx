"use client";
import React, { useState } from 'react';
import TextArea from '@/components/textArea';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
  },
  textarea: {
    width: '600px',
    height: '100px',
  },
  button: {
    width: '100px',
  },
};

const Base64EncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    const encoded = btoa(input);
    setOutput(encoded);
  };

  const decode = () => {
    const decoded = atob(output);
    setInput(decoded);
  };


  return (
    <div style={style.container as React.CSSProperties}>
      <h1>Base64 Encoder & Decoder</h1>
      <TextArea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Input" />
      <div>
      <button style={style.button} onClick={encode}>Encode</button>
      <button style={style.button} onClick={decode}>Decode</button>
      </div>
      <TextArea value={output} onChange={(e) => setOutput(e.target.value)} placeholder="Output" />
    </div>
  );
};

export default Base64EncoderDecoder;
