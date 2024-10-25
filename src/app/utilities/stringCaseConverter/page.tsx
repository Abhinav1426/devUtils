"use client";
import React, { useEffect, useState } from 'react';
import PageHeadding from '@/components/pageHeadding';
import formatStringOutput from '@/utils/stringUtils';
import TabList from '@/components/tabPanel';
import TabPanelText from '@/components/tabPanelText';
import TextArea from '@/components/textArea';
import CopyButton from '@/components/copyButton';
import styles from '@/components/styles';

const StringCaseConverter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [activeTab, setActiveTab] = useState('lower case');
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);
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
    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1440);
    };
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const convertString = () => {
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
        console.log(activeTab, input, output, "2");
    };

    function handleTabChange(str: string): void {
        setActiveTab(str);
        console.log(activeTab, input, output, "3");
    }

    return (
        <main className={styles.mainClass}>
            <PageHeadding title="String Case Converter" />
            <section className="g:w-3/4 w-4/5">
                <div>
                    {isDesktop ? (
                        <div className={styles.flexColCenter}>
                            <div className="card rounded-box flex w-auto  flex-col border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition p-6">
                                <TabList tabs={tabs} handleTabChange={handleTabChange} input={input} output={output} handleChangeInput={handleChangeInput} />
                                <CopyButton text={output} />
                            </div>
                        </div>
                    ) : (
                        <div className={styles.flexColCenter}>
                            <div className="card rounded-box border bg-card text-card-foreground shadow-sm flex-1 hover:shadow-md transition w-full p-4">
                                <label className="label">
                                        <span className="label-text font-medium">Select the case converter</span>
                                </label>
                                    <select className="select select-bordered w-full" value={activeTab} onChange={(e) => handleTabChange(e.target.value)}>
                                        {tabs.map((tab, index) => (
                                            <option key={index} value={tab.label} selected={tab.label === activeTab}>{tab.label}</option>
                                        ))}
                                    </select>
                                <>
                                    <label className="label pt-3">
                                        <span className="label-text font-medium">Text</span>
                                    </label>
                                    <TextArea className="card rounded-box grid h-40  hover:shadow-2xl" value={input} onChange={handleChangeInput} placeholder="Input" />
                                    <div className="divider"></div>
                                    <label className="label">
                                        <span className="label-text font-medium">Output Text</span>
                                    </label>
                                    <TextArea className="card rounded-box grid h-40  hover:shadow-2xl" value={output} placeholder="Output" readOnly />
                                </>
                                <CopyButton text={output} />
                            </div>
                        </div>
                    )}
                </div>


            </section>
        </main>
    );
};

export default StringCaseConverter;
