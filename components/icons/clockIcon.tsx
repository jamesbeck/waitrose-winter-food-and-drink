import React from 'react';

type Props = {
  className?: string;
};

export const ClockIcon: React.FC<Props> = ({ className }: Props) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.4181 10.3001C10.6059 10.4879 10.6059 10.7908 10.4181 10.9786C10.3245 11.0722 10.2015 11.119 10.0785 11.119C9.95556 11.119 9.83256 11.0722 9.73899 10.9786L6.85941 8.09905C6.76942 8.00907 6.71903 7.88669 6.71903 7.75951V3.44076C6.71903 3.17559 6.93379 2.96083 7.19896 2.96083C7.46413 2.96083 7.67889 3.17559 7.67889 3.44076V7.56155L10.4181 10.3008L10.4181 10.3001ZM14.3979 8C14.3979 11.9697 11.1686 15.1989 7.19894 15.1989C3.22927 15.1989 0 11.9697 0 8C0 4.03033 3.22927 0.801056 7.19894 0.801056C11.1686 0.801056 14.3979 4.03033 14.3979 8ZM13.438 8C13.438 4.56017 10.6388 1.76091 7.19894 1.76091C3.75911 1.76091 0.959859 4.56017 0.959859 8C0.959859 11.4398 3.75911 14.2391 7.19894 14.2391C10.6388 14.2391 13.438 11.4398 13.438 8Z"
        fill="white"
      />
    </svg>
  );
};