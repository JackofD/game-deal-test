import { FC } from 'react';

type TextInputProps = {
  className?: string;
  change: (val:string) => void;
  placeholder?: string;
  value: string;
};

const TextInput: FC<TextInputProps> = (props) => {
  const defaultStyles = 'border-0 outline-none rounded-md';
  const { className, placeholder = 'Type here', change} = props;
  return (
    <div className={`rounded-md flex flex-row justify-between items-center border border-gray-200 px-4 py-2 ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        className={`${defaultStyles}`}
        onChange={(event) => change(event.target.value)}
      />
      {props.children}
    </div>
  )
};

export default TextInput;