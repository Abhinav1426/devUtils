import React from 'react';
import TabPanelText from './tabPanelText';


type TabProps = {
  label: string;
  defaultChecked?: boolean;
  handleTabChange: (label: string) => void;
  input: string;
  output: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Tab = ({ label, defaultChecked, handleTabChange, input, output, handleChangeInput }: TabProps) => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab font-bold"
      aria-label={label}
      onClick={() => handleTabChange(label)}
      defaultChecked={defaultChecked}
    />
    <TabPanelText
      input={input}
      output={output}
      lableOne="Text"
      lableTwo="Output Text"
      handleInputChange={handleChangeInput}
    />
  </>
);


const TabList = ({ handleTabChange, input, output, handleChangeInput ,tabs }: { handleTabChange: (label: string) => void, input: string, output: string, handleChangeInput: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void, tabs: { label: string, defaultChecked?: boolean }[] }) => (
    <div role="tablist" className="tabs tabs-lifted bg-base-200 rounded-box">
        {tabs.map((tabs, index) => (
      <Tab
        key={index}
        label={tabs.label}
        defaultChecked={tabs.defaultChecked}
        handleTabChange={handleTabChange}
        input={input}
        output={output}
        handleChangeInput={handleChangeInput}
      />
    ))}
    </div>

);

export default TabList;