"use client";
import React, { useEffect, useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import styles from '@/components/styles';
import CopyButton from '@/components/copyButton';
import TextArea from '@/components/textArea';

const tabs = [
    {
        value: 2,
        label: "Binary (2)",
      },
      {
        value: 8,
        label: "Octal (8)",
      },
      {
        value: 10,
        label: "Decimal (10)",
      },
      {
        value: 16,
        label: "Hexadecimal (16)",
      },
];


function Selector(props: any) {
    return (
      <div className='pb-2'>
            <select className="select select-bordered w-full" value={props.activeSelector} onChange={(e) => props.handleSelectorChange(e.target.value)}>
            {tabs.map((tab, index) => (
                <option key={index} value={tab.label} selected={tab.label === props.activeSelector}>{tab.label}</option>
            ))}
        </select>
      </div>
    )
  }

const BaseNumberConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [fromNumber, setFromNumber] = useState('Decimal (10)');
    const [toNumber, setToNumber] = useState('Binary (2)');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { baseNumberConvet() }, [fromNumber,toNumber, input]);

    const baseNumberConvet = () => {
        const fromBase = tabs.filter((tab) => tab.label === fromNumber)[0].value;
        const toBase = tabs.filter((tab) => tab.label === toNumber)[0].value;
        if (!input) {
          setOutput("");
        }
        const parsedNum = parseInt(input, fromBase);
        if (isNaN(parsedNum)) {
          setOutput("Invalid number");
        }
        const outputStr = parsedNum.toString(toBase);
        setOutput (outputStr === 'NaN' ? (input === '') ? "" : "Invalid number": outputStr);
      };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput(event.target.value);
        baseNumberConvet();
    };

    return (
        <main className={styles.mainClass}>
            <PageHeadding title="Base Number Converter" />
            <section className="lg:w-3/4 w-4/5">
                <div className={styles.flexColCenter}>
                    <div className="card rounded-box  border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition lg:p-6 lg:w-3/6 w-full p-4">
                        <label className="label">
                        <span className="label-text font-medium">From Base:</span>
                        </label>
                        <Selector activeSelector={fromNumber} handleSelectorChange={setFromNumber} />
                        <TextArea className="card rounded-box grid h-40  hover:shadow-2xl" value={input} onChange={handleChangeInput} placeholder="Input" />
                        <label className="label">
                        <span className="label-text font-medium">To Base:</span>
                        </label>
                        <Selector activeSelector={toNumber} handleSelectorChange={setToNumber} />
                        <TextArea className="card rounded-box grid h-40  hover:shadow-2xl" value={output} placeholder="Output" readOnly />
                        <CopyButton text={output} />
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BaseNumberConverter;
