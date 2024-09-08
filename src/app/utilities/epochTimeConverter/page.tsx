"use client";
import React, { useCallback, useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import TextArea from "@/components/textArea";
import { formatOutput } from '@/utils/timestamp-to-date.utils';

const EpochTimeConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleChangeInput = useCallback( (value: string ) => {
          console.log(value);
          setInput(value);
          if (value.trim() === "") {
            setOutput("");
            return;
          }
          try {
            const output = formatOutput(value.trim());
            setOutput(output);
          } catch {
            setOutput(
              "Invalid timestamp format.\nPlease use milliseconds (11-13 digits) or seconds (1-10 digits)."
            );
          }
        },
        []
      );


    return (
        <main className='flex min-h-screen flex-col items-center p-20'>
            <PageHeadding title="Epoch Time Converter" />
            <section className="container flex flex-col place-items-center">
                <div className="card rounded-box flex w-3/6 flex-col border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition p-6">
                    <label className="label">
                        <span className="label-text font-medium">Epoch Timestamp (milliseconds or seconds) </span>
                    </label>
                    <TextArea className="card rounded-box grid h-10 place-items-center hover:shadow-2xl" value={input} onChange={(e) => handleChangeInput(e.target.value)} placeholder="Input" />
                    <div className="divider"></div>
                    <label className="label">
                        <span className="label-text font-medium">Date</span>
                    </label>
                    <TextArea className="card rounded-box grid h-32 place-items-center hover:shadow-2xl" value={output} placeholder="Output" readOnly/>
                </div>
            </section>
        </main>
    );
};

export default EpochTimeConverter;
