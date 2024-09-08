"use client";
import React, { useCallback, useState } from 'react';
import { base64Encode, base64Decode } from '@/utils/base64Utils';
import TabPanelText from '@/components/tabPanelText';
import PageHeadding from '@/components/pageHeadding';

const Base64EncoderDecoder = () => {
  const [inputEncode, setInputEncode] = useState('');
  const [outputEncode, setOutputEncode] = useState('');
  const [inputDecode, setInputDecode] = useState('');
  const [outputDecode, setOutputDecode] = useState('');
  const [activeTab, setActiveTab] = useState('Encode');

  const handleTabChange = (str: string) => {
    setActiveTab(str);
    if (activeTab === "Encode") {
      setInputEncode("");
      setOutputEncode("");
    }
    if (activeTab === "Decode") {
      setInputDecode("");
      setOutputDecode("");
    }
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      activeTab === 'Encode' ? setInputEncode(e.target.value) : setInputDecode(e.target.value);
      if (activeTab === "Encode") {
        setInputEncode(e.currentTarget.value)
        try {
          setOutputEncode(base64Encode(e.currentTarget.value));
        } catch (e) {
          setOutputEncode("Failed to encode to Base64");
        }
      }
      if (activeTab === "Decode") {
        setInputDecode(e.currentTarget.value);
        try {
          setOutputDecode(base64Decode(e.currentTarget.value));
        } catch (e) {
          setOutputDecode("Failed to decode from Base64");
        }
      }
    },
    [activeTab]
  );

  return (
    <main className='flex min-h-screen flex-col items-center p-20'>
      <PageHeadding title="Base64 Encoder & Decoder" />
      <section className="container flex flex-col place-items-center">
        <div className="card rounded-box flex w-2/6 flex-col border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition p-6">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Encode" onClick={() => handleTabChange("Encode")} defaultChecked />
            <TabPanelText input={inputEncode} output={outputEncode} handleInputChange={handleInputChange} />
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Decode" onClick={() => handleTabChange("Decode")} />
            <TabPanelText input={inputDecode} output={outputDecode} handleInputChange={handleInputChange} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Base64EncoderDecoder;
