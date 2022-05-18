import React from 'react';

const ContainerTotalPrice = ({ listProductsInCart }) => {
  const priceAllProductsInCart = listProductsInCart
    .map((product) => product.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="shop-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
      <h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
      <h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">
        $ {priceAllProductsInCart.toFixed(2)}
      </h3>
    </div>
  );
};

export default ContainerTotalPrice;
