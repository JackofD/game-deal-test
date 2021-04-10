import { FC } from 'react';

type IconProps = {
  name?: string;
  className?: string;
};

const Icon: FC<IconProps> = (props) => {
  const { name = 'chevron', className } = props;

  const selectIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5 20C9.35786 20 6 16.6421 6 12.5C6 8.35786 9.35786 5 13.5 5C17.6421 5 21 8.35786 21 12.5C21 14.4805 20.2324 16.2816 18.9784 17.6222L22.7809 22.3753C23.1259 22.8066 23.056 23.4359 22.6247 23.7809C22.1934 24.1259 21.5641 24.056 21.2191 23.6247L17.4304 18.8888C16.2875 19.5935 14.9412 20 13.5 20ZM13.5 18C16.5376 18 19 15.5376 19 12.5C19 9.46243 16.5376 7 13.5 7C10.4624 7 8 9.46243 8 12.5C8 15.5376 10.4624 18 13.5 18Z" fill="currentColor"/>
          </svg>
        );

      case 'check':
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6344 0.634217C14.9468 0.321797 15.4533 0.321797 15.7657 0.634217C16.0782 0.946636 16.0782 1.45317 15.7657 1.76559L6.16573 11.3656C5.85331 11.678 5.34678 11.678 5.03436 11.3656L1.03436 7.36559C0.721944 7.05317 0.721944 6.54664 1.03436 6.23422C1.34678 5.9218 1.85331 5.9218 2.16573 6.23422L5.60005 9.66853L14.6344 0.634217Z" fill="currentColor"/>
          </svg>


        );

      case 'chevron':
      default:
        return (
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L15 17.5858Z" fill="currentColor"/>
          </svg>
        );
    }
  };

  return (
    <i className={`${className}`}>
      {selectIcon(name)}
    </i>
  );
};

export default Icon;