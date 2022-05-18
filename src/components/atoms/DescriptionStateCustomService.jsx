import React from 'react';

const DescriptionStateCustomService = ({ isCheck }) => {
  return (
    <div className="p-relative maintenance-services__section-details s-cols-3 m-cols-2">
      <h4 className="details__description content-color s-pl-2">
        {isCheck ? 'incluido' : 'no incluido'}
      </h4>
    </div>
  );
};

export default DescriptionStateCustomService;
