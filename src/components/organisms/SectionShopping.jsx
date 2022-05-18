import ContainerTotalPrice from 'components/atoms/ContainerTotalPrice';
import SecondaryButton from 'components/atoms/SecondaryButton';
import PaymentIcon from 'components/icons/static/PaymentIcon';
import CartWithoutProducts from 'components/molecules/CartWithoutProducts';
import useCart from 'hooks/useCart';
import React from 'react';
import ListOfItemsInTheCart from './ListOfItemsInTheCart';

const SectionShopping = () => {
  const { productsInCart, quantity } = useCart();

  return (
    <section className="section-shop ed-grid s-grid-12">
      {quantity > 0 ? (
        <>
          <h2 className="title-color s-cols-12">Añadidos al carrito</h2>

          <ListOfItemsInTheCart listAddToCart={productsInCart} />

          <ContainerTotalPrice listProductsInCart={productsInCart} />

          <SecondaryButton
            icon={<PaymentIcon />}
            title="Añade un método de pago"
            othersClass="mt-32 inactive-color s-cols-12 s-to-right"
          />
          <h6 className="title-color s-cols-12 s-to-right">
            *Opción aún no habilitada
          </h6>
        </>
      ) : (
        <CartWithoutProducts />
      )}
    </section>
  );
};

export default SectionShopping;
