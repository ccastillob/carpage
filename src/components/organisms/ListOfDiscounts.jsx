import React from 'react';
import CardDiscount from './CardDiscount';

const ListOfDiscounts = ({ discounts }) => {
  return (
    <section className="section-card ed-grid s-grid-12 rows-gap">
      {discounts.map(
        ({
          _id,
          arrayColors,
          nameDiscount,
          descriptionDiscount,
          priceDiscount,
          percentage,
        }) => (
          <CardDiscount
            key={_id}
            arrayColors={arrayColors}
            nameDiscount={nameDiscount}
            descriptionDiscount={descriptionDiscount}
            priceDiscount={priceDiscount}
            percentage={percentage}
          />
        )
      )}
    </section>
  );
};

export default ListOfDiscounts;
