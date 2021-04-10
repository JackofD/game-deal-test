import { FC } from 'react';

type ButtonProps = {
  className?: string;
  click: () => void;
  text?: string;
};

const Button: FC<ButtonProps> = (props) => {
  const defaultStyles = 'inline-block px-4 py-2 border border-black rounded-md';
  const { className, text = 'click me', click } = props;
  return <button className={`${defaultStyles} ${className}`} onClick={click}>{text}</button>
};

export default Button;