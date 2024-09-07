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
  }
};

const Base64EncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    const encoded = encodeURI(input).replace(/%5B/g, "[")
      .replace(/%5D/g, "]")
      .replace(
        /[!'()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      );
    setOutput(encoded);
  };

  const decode = () => {
    const decoded = decodeURI(output);
    setInput(decoded);
  };


  return (
    <main className='flex min-h-screen flex-col items-center p-24'>

      <div className='items-center'>
        <h1 className='text-3xl font-bold text-center p-4'>URL Encoder and Decoder</h1>
      </div>
      <div className="flex w-2/6 flex-col">
        <div className="card bg-base-300 rounded-box grid  h-100 place-items-center">
          <TextArea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Input" />
        </div>
        <div className="divider"></div>
        <div className="card bg-base-300 rounded-box grid h-100 place-items-center">
          <TextArea value={output} onChange={(e) => setOutput(e.target.value)} placeholder="Output" />
        </div>
      </div>
      <div className='card'>
      </div>

    </main>
  );
};

export default Base64EncoderDecoder;
