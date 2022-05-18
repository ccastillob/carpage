import CheckIcon from 'components/icons/special/CheckIcon';
import DeleteIcon from 'components/icons/special/DeleteIcon';
import React from 'react';

const ItemInTheCar = ({ id, name = '', tagItem = '', price = 0, details }) => {
  return (
    <div className="shop-services s-cols-12 ed-grid s-grid-4 s-gap-4">
      <div className="shop-services__list s-cols-2">
        <CheckIcon
          otherClass="check-content-color"
          containerClass="check-container"
        />
        <h3 className="content-color">
          {name} ({tagItem})
        </h3>
      </div>
      <h3 className="shop-services__price content-color m-cols-1 m-main-end m-x-3">
        $ {price.toFixed(2)}
      </h3>
      <div className="shop-services__delete s-main-end s-x-4 s-cols-1">
        <DeleteIcon id={id} />
      </div>
      <div className="p-relative shop-services__section-details s-cols-3 m-cols-2">
        {details?.map(({ id, name }) => (
          <h4 key={id} className="details__description content-color s-pl-2">
            {name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ItemInTheCar);
