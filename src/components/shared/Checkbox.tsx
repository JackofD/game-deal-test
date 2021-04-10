import { FC, useState } from 'react';
import Icon from './Icon';

type CheckboxProps = {
  className?: string;
  change?: (val: boolean) => void;
  labelText?: string;
};

const Checkbox: FC<CheckboxProps> = (props) => {
  const [checkboxState, setCheckboxState] = useState(false);
  const { labelText = '', className, change } = props;

  const checkboxChange = () => {
    setCheckboxState(!checkboxState);

    if(change) {
      change(checkboxState);
    }
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <label className="mr-2 cursor-pointer">
        {labelText}
        <input className="hidden" type="checkbox" checked={checkboxState} onChange={checkboxChange} />
      </label>
      <div className="border-2 border-green-500 relative custom-checkbox cursor-pointer">
      <div className="custom-checkbox" onClick={checkboxChange}>{checkboxState && <Icon name="check" className=" text-green-500 absolute custom-check" />}</div>
      </div>
    </div>
  );
};

export default Checkbox;