"use client";
import React, { useCallback, useState } from 'react';
import { base64Encode, base64Decode } from '@/utils/base64Utils';
import TabPanelText from '@/components/tabPanelText';
import PageHeadding from '@/components/pageHeadding';
import TabList from '@/components/tabPanel';

const Base64EncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState('Encode');
  const tabs = [
    { label: "Encode", defaultChecked: true },
    { label: "Decode" }
  ];

  const handleTabChange = (str: string) => {
    setActiveTab(str);
      setInput("");
      setOutput("");
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      activeTab === 'Encode' ? setInput(e.target.value) : setInput(e.target.value);
      if (activeTab === "Encode") {
        setInput(e.currentTarget.value)
        try {
          setOutput(base64Encode(e.currentTarget.value));
        } catch (e) {
          setOutput("Failed to encode to Base64");
        }
      }
      if (activeTab === "Decode") {
        setInput(e.currentTarget.value);
        try {
          setOutput(base64Decode(e.currentTarget.value));
        } catch (e) {
          setOutput("Failed to decode from Base64");
        }
      }
    },
    [activeTab]
  );

  return (
    <main className='flex min-h-screen flex-col items-center p-20'>
      <PageHeadding title="Base64 Encoder & Decoder" />
      <section className="container flex flex-col place-items-center">
        <div className="card rounded-box flex w-3/6 flex-col border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition p-6">
          <TabList tabs={tabs} handleTabChange={handleTabChange} input = {input} output = {output} handleChangeInput = {handleInputChange}/>
        </div>
      </section>
    </main>
  );
};

export default Base64EncoderDecoder;
