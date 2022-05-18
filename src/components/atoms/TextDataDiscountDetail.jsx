import React from 'react';

const TextDataDiscountDetail = ({ name, description, price, percentage }) => {
  return (
    <>
      <h2 className="title-color s-center m-left m-cols-6">{name}</h2>
      <h3 className="text__view content-color s-pt-2 m-cols-6">
        {description}
      </h3>
      <h3 className="content-color s-center m-left s-pt-4 m-cols-6">
        $ {((price * (100 - percentage)) / 100)?.toFixed(2)}
      </h3>
      <h4 className="text__price-before content-color s-center m-left s-pt-1 m-cols-6 s-mb-4">
        $ {price?.toFixed(2)}
      </h4>
    </>
  );
};

export default React.memo(TextDataDiscountDetail);
