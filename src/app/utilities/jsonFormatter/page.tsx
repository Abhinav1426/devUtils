"use client";
import React, { useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import CopyButton from '@/components/copyButton';
import styles from '@/components/styles';
import TextArea from '@/components/textArea';

const URLEncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const formate = () => {
      const value  = input;
      try {
        const parsedJSON = JSON.parse(value.trim());
        const formattedJSON = JSON.stringify(parsedJSON, null, 2);

        setOutput(formattedJSON);
      } catch {
        setOutput("Invalid JSON input");
      }
    };
  const minifier = () => {
    const value  = input;
    try {
      const parsedJSON = JSON.parse(value.trim());
      const minifiedJSON = JSON.stringify(parsedJSON);

      setOutput(minifiedJSON);
    } catch {
      setOutput("Invalid JSON input");
    }
  }
  return (
    <main className={styles.mainClass.concat("lg:px-10 lg:pb-10")}>
      <PageHeadding title="JSON Formatter and Minifier" />
      <section className="lg:w-11/12 w-4/5">
        <div className={styles.flexColCenter}>
          <div className="card rounded-box border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition lg:p-6 lg:w-100 lg:h-100 w-full p-4">
            <div className="flex w-full flex-col lg:flex-row ">
              <div className="card  rounded-box grid flex-grow place-items-center">
              <TextArea className="card rounded-box  grid place-items-center hover:shadow-2xl resize-none lg:h-[500px] md:h-72 sm:h-48" value={input} onChange={(e)=>{setInput(e.currentTarget.value)}} placeholder="Input"  />
              </div>
              <div className="divider lg:divider-horizontal sm:m-2 md:m-3"></div>
              <div className='flex lg:flex-col flex-row items-center justify-evenly '>
                <button className="btn btn-outline sm:btn-sm" onClick={formate}>Formate</button>
                <button className="btn btn-outline sm:btn-sm" onClick={minifier}>Minifier</button>
              </div>
              <div className="divider lg:divider-horizontal sm:m-2 md:m-3"></div>
              <div className="card  rounded-box grid  flex-grow place-items-center">
              <TextArea className="card rounded-box grid  place-items-center hover:shadow-2xl resize-none lg:h-[500px] md:h-72 sm:h-48" value={output} placeholder="Output" readOnly />
              </div>
            </div>
            <CopyButton classButtonName="sm:btn-sm" text={output} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default URLEncoderDecoder;
