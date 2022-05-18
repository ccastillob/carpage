import CheckIcon from 'components/icons/special/CheckIcon';
import StateCustomServiceMaintenance from 'components/molecules/StateCustomServiceMaintenance';
import React from 'react';

const CustomServiceMaintenance = ({ id, name, price, isCheck }) => {
  return (
    <div className="maintenance-services s-cols-12 ed-grid s-grid-4 s-gap-4">
      <div className="maintenance-services__list s-cols-2">
        <CheckIcon
          otherClass="check-content-color"
          containerClass="check-container"
        />
        <h3 className="content-color">{name}</h3>
      </div>
      <h3 className="maintenance-services__price content-color m-cols-1 m-main-end m-x-3">
        $ {price.toFixed(2)}
      </h3>
      <StateCustomServiceMaintenance id={id} isCheck={isCheck} />
    </div>
  );
};

export default React.memo(CustomServiceMaintenance);
