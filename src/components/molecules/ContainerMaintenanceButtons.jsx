import React, { useEffect, useMemo, useState } from 'react';
import GhostButton from 'components/atoms/GhostButton';
import SecondaryButton from 'components/atoms/SecondaryButton';
import CustomizeIcon from 'components/icons/static/CustomizeIcon';
import ShopIcon from 'components/icons/static/ShopIcon';

const ContainerMaintenanceButtons = ({
  uploadCustomServices,
  addToCart,
  maintenanceID,
}) => {
  const productsInCart = useMemo(
    () =>
      localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    []
  );
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const isAddToCart = productsInCart.some(
      (product) => product.id === maintenanceID
    );

    isAddToCart ? setShowButton(false) : setShowButton(true);
  }, [productsInCart, maintenanceID]);

  const handleCustomServices = () => {
    uploadCustomServices();
  };

  const handleAddToCart = () => {
    addToCart();
    setShowButton(false);
  };

  return (
    <div className="container-buttons mt-32">
      {showButton ? (
        <>
          <GhostButton
            event={handleCustomServices}
            icon={<CustomizeIcon />}
            othersClass="mr-32"
            title="Personaliza"
          />
          <SecondaryButton
            event={handleAddToCart}
            icon={<ShopIcon />}
            title="Añádelo"
          />
        </>
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

export default ContainerMaintenanceButtons;
