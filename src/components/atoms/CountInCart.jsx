import useCart from 'hooks/useCart';
import React from 'react';

const CountInCart = () => {
  const { quantity } = useCart();

  return <span className="circle__icon">{quantity}</span>;
};

export default CountInCart;
