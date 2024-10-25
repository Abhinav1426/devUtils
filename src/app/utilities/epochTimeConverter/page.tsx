"use client";
import React, { useCallback, useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import TextArea from "@/components/textArea";
import { formatOutput } from '@/utils/timestamp-to-date.utils';
import CopyButton from '@/components/copyButton';
import styles from '@/components/styles';

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
      // TODO: Change the UI and add more features to the page
      <main className={styles.mainClass}>
            <PageHeadding title="Epoch Time Converter" />
            <section className="lg:w-3/4 w-4/5">
            <div className={styles.flexColCenter}>
              <div className="card rounded-box border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition lg:p-6 lg:w-3/6 w-full p-4">
                    <label className="label">
                        <span className="label-text font-medium">Epoch Timestamp (milliseconds or seconds) </span>
                    </label>
                    <TextArea className="card rounded-box grid h-10  hover:shadow-2xl" value={input} onChange={(e) => handleChangeInput(e.target.value)} placeholder="Input" />
                    <div className="divider"></div>
                    <label className="label">
                        <span className="label-text font-medium">Date</span>
                    </label>
                    <TextArea className="card rounded-box grid h-32  hover:shadow-2xl sm:h-40" value={output} placeholder="Output" readOnly/>
                    <CopyButton text={output} />
                </div>
            </div>
            </section>
        </main>
    );
};

export default EpochTimeConverter;
