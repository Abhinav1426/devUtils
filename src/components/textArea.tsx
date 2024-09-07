
const style = {
    textarea: {
      width: '600px',
      height: '100px',
    },
  };




const TextArea = (props: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder?: string; }) => {
    return <textarea  className="textarea textarea-bordered h-100 place-items-center"  value={props.value} onChange={props.onChange} placeholder={props.placeholder} />; 
  };

export default TextArea;