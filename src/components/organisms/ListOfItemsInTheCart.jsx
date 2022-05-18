import ItemInTheCar from 'components/molecules/ItemInTheCar';
import React from 'react';

const ListOfItemsInTheCart = ({ listAddToCart }) => {
  return (
    <div className="shop-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8  pt-24">
      {listAddToCart?.map(({ id, name, tagItem, price, details }) => (
        <ItemInTheCar
          key={id}
          id={id}
          name={name}
          tagItem={tagItem}
          price={price}
          details={details}
        />
      ))}
    </div>
  );
};

export default ListOfItemsInTheCart;
