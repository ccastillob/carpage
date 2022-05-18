import SecondaryButton from 'components/atoms/SecondaryButton';
import ShopIcon from 'components/icons/static/ShopIcon';
import useCustomService from 'hooks/useCustomService';
import React from 'react';

const ContainerCustomServiceButton = () => {
  const { addToCartCustomServices } = useCustomService();

  const handleAddToCart = () => {
    addToCartCustomServices();
  };

  return (
    <div className="maintenance-container-button s-cols-12 s-main-end">
      <SecondaryButton
        event={handleAddToCart}
        icon={<ShopIcon />}
        title="Añádelo al carrito"
        othersClass="mt-32"
      />
    </div>
  );
};

export default ContainerCustomServiceButton;
