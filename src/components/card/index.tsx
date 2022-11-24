import React from 'react';

interface ICard {
  children: React.ReactNode;
  borderW?: string;
  borderColor?: string;
}

const Card = ({ children, borderW, borderColor }: ICard) => (
  <div className={`flex flex-col bg-white ${borderW} ${borderColor}`}>
    {children}
  </div>
);

Card.defaultProps = {
  borderW: '',
  borderColor: '',
};

export default Card;
