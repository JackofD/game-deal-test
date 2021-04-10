import { FC, useState } from 'react';
import Icon from './Icon';


type AccordionProps = {
  className?: string;
  headerText?: string;
};

const Accordion: FC<AccordionProps> = (props) => {
  const [accordionState, setAccordionState] = useState(false);

  const { headerText, className } = props;

  return (
    <div className="accordion">
      <header className="flex flex-row justify-between bg-gray-100 p-4 cursor-pointer" onClick={() => setAccordionState(!accordionState)}>
        <div>{headerText}</div>
        <Icon className={`${accordionState ? 'transform rotate-180' : ''} cursor-pointer text-green-500`} />
      </header>
      <section className={`accordion-content transition-all duration-500 p-4 ${accordionState ? 'opacity-100 h-24 ' : 'opacity-0 h-0 py-0'}`}>
        {props.children}
      </section>
    </div>
  );
};

export default Accordion;