import type React from "react";
import { ChangeEventHandler } from "react";
import TextArea from "./textArea";

export default function TabPanelText({ input, output,lableOne,lableTwo, handleInputChange }: { input: string, output: string, lableOne?: string,  lableTwo?: string, handleInputChange: ChangeEventHandler<HTMLTextAreaElement> }): React.JSX.Element {
  return (
    <>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <label className="flex select-none items-center justify-between px-1 py-2">
          <span className="text-sm font-medium">{lableOne}</span>
        </label>
        <TextArea className="card rounded-box grid h-40  hover:shadow-2xl text-left" value={input} onChange={handleInputChange} placeholder="Input" />
        <div className="divider"></div>
        <label className="flex select-none items-center justify-between px-1 py-2">
          <span className="text-sm font-medium">{lableTwo}</span>
        </label>
        <TextArea className="card rounded-box grid h-40  hover:shadow-2xl" value={output} placeholder="Output" readOnly />
      </div>
    </>
  );
}
