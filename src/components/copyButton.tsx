import { useCallback, useEffect, useState } from "react";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";

const copyCheckButton = () => {
   return( <>
    <TbCopyCheckFilled />Copied!
    </>
)};
const copyButton = () => {
return(<>
   <TbCopy />Copy
</>
)};

export default function CopyButton({ text }: { text: string }) {
    const [initialText] = useState(copyButton);
    const [buttonText, setButtonText] = useState(initialText);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const handleCopy: React.MouseEventHandler<HTMLButtonElement> = useCallback(
        () => {
          navigator.clipboard.writeText(text).then(() => {
            setButtonText(copyCheckButton);
            const id = setTimeout(() => setButtonText(initialText), 1200);
            setTimeoutId(id);
          });
        },
        [initialText, text]
      );
      useEffect(() => {
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
        };
      }, [timeoutId]);

    return (
        <div className="flex justify-start  pt-4">
            <button className="btn btn-outline lg:w-[15%] md:w-[25%] sm:w-[40%]" onClick={handleCopy}>{buttonText}</button>
        </div>
    );
}