import React from 'react';

const TextDataModelDetail = ({ name, description, price }) => {
  return (
    <>
      <h2 className="title-color m-cols-6 s-center m-left">{name}</h2>
      <h3 className="text__view content-color s-pt-2 m-cols-6">
        {description}
      </h3>
      <h3 className="content-color s-center m-left s-pt-4 m-cols-6 s-mb-4">
        $ {price?.toFixed(2)}
      </h3>
    </>
  );
};

export default React.memo(TextDataModelDetail);
