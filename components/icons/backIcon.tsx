import React from 'react';

type Props = {
  className?: string;
};

export const BackIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.62818 20.5975C9.8865 20.858 10.2153 21 10.6027 21C11.3777 21 12 20.3844 12 19.6032C12 19.2125 11.8356 18.8574 11.5656 18.5851L3.34638 10.4882L11.5656 2.41488C11.8356 2.14262 12 1.77565 12 1.39684C12 0.615558 11.3777 0 10.6027 0C10.2153 0 9.8865 0.142052 9.62818 0.40248L0.493151 9.3991C0.164384 9.70688 0.0117417 10.0857 0 10.5C0 10.9143 0.164384 11.2694 0.493151 11.5891L9.62818 20.5975Z"
        fill="#0A0A08"
      />
    </svg>
  );
};
