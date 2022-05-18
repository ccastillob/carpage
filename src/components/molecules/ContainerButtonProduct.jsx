import SecondaryButton from 'components/atoms/SecondaryButton';
import ShopIcon from 'components/icons/static/ShopIcon';
import React, { useEffect, useMemo, useState } from 'react';

const ContainerButtonProduct = ({ modelID, addToCart }) => {
  const productsInCart = useMemo(
    () =>
      localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    []
  );
  const [showButtonAddToCart, setShowButtonAddToCart] = useState(true);

  useEffect(() => {
    const isAddToCart = productsInCart.some(
      (product) => product.id === modelID
    );

    isAddToCart ? setShowButtonAddToCart(false) : setShowButtonAddToCart(true);
  }, [productsInCart, modelID]);

  const handleAddToCart = () => {
    addToCart();
    setShowButtonAddToCart(false);
  };

  return (
    <div className="mt-32 m-cols-6">
      {showButtonAddToCart ? (
        <SecondaryButton
          event={handleAddToCart}
          icon={<ShopIcon />}
          title="Añádelo al carrito"
        />
      ) : (
        <SecondaryButton
          icon={<ShopIcon />}
          title="Añadido al carrito"
          othersClass="button-secondary-danger"
        />
      )}
    </div>
  );
};

export default ContainerButtonProduct;
