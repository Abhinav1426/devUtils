"use client";
import React, { useEffect, useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import  formatStringOutput  from '@/utils/stringUtils';
import TabList from '@/components/tabPanel';

const StringCaseConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [activeTab, setActiveTab] = useState('lower case');
    const tabs = [
        { label: "lower case", defaultChecked: true },
        { label: "UPPER CASE" },
        { label: "lowerCamelCase" },
        { label: "UpperCamelCase" },
        { label: "snake_case" },
        { label: "kebab-case" },
        { label: "CONSTANT_CASE" },
      ];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { convertString() }, [activeTab, input]);

    const convertString =() => {
        try {
            const output = formatStringOutput(input, activeTab);
            setOutput(output);
        } catch (e) {
            setOutput("Error converting string case.");
        }
        console.log(activeTab, input, output, "1");
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        setInput(value);
        convertString();
        console.log(activeTab , input, output , "2");
    };

    function handleTabChange(str: string): void {
        setActiveTab(str);
        console.log(activeTab , input, output , "3");
    }

    return (
        <main className='flex flex-col items-center p-20'>
            <PageHeadding title="String Case Converter" />
            <section className="container flex flex-col place-items-center">
                <div className="card rounded-box flex w-2/3  flex-col border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition p-6">
                    <TabList tabs={tabs} handleTabChange={handleTabChange} input = {input} output = {output} handleChangeInput = {handleChangeInput}/>
                </div>
            </section>
        </main>
    );
};

export default StringCaseConverter;
