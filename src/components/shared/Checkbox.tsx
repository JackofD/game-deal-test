import { FC, useState } from 'react';
import Icon from './Icon';

type CheckboxProps = {
  className?: string;
  click?: (val: boolean) => void;
  labelText?: string;
};

const Checkbox: FC<CheckboxProps> = (props) => {
  const [checkboxState, setCheckboxState] = useState(false);
  const { labelText = '', className, click } = props;

  const checkboxClick = () => {
    setCheckboxState(!checkboxState);

    if(click) {
      click(checkboxState);
    }
  };
  
  return (
    <div className="flex items-center cursor-pointer">
      <label className="mr-2 cursor-pointer">
        {labelText}
        <input className="hidden" type="checkbox" checked={checkboxState} onChange={checkboxClick} />
      </label>
      <div className="border-2 border-green-500 relative custom-checkbox">
        {checkboxState && <Icon name="check" className=" text-green-500 absolute custom-check" />}
      </div>
    </div>
  );
};

export default Checkbox;