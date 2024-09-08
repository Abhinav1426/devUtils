import { ChangeEventHandler } from "react";
import TextArea from "./textArea";

export default function TabPanelText({ input, output, handleInputChange }: { input: string, output: string, handleInputChange: ChangeEventHandler<HTMLTextAreaElement> }): JSX.Element {
    return (
      <>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className="card rounded-box grid h-40 place-items-center hover:shadow-2xl">
            <TextArea value={input} onChange={handleInputChange} placeholder="Input" />
          </div>
          <div className="divider"></div>
          <div className="card rounded-box grid h-40 place-items-center hover:shadow-2xl">
            <TextArea value={output} placeholder="Output" readOnly />
          </div>
        </div>
      </>
    );
  }
    