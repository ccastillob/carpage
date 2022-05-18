import SecondaryButton from 'components/atoms/SecondaryButton';
import { useHistory } from 'react-router-dom';

const CartWithoutProducts = () => {
  const history = useHistory();

  const handleModel = () => {
    history.push('/models');
  };

  const handleMaintenance = () => {
    history.push('/maintenances');
  };

  const handleDiscount = () => {
    history.push('/discounts');
  };

  return (
    <>
      <h1 className="title-color s-center s-cols-12">Tu carrito está vacio</h1>
      <h3 className="content-color s-center s-cols-12">
        Te invito a que visites estos enlaces para agregar productos a él.
      </h3>
      <div className="container-buttons s-center mt-32 s-cols-12">
        <SecondaryButton event={handleModel} title="Modelos" />
      </div>
      <div className="container-buttons s-center mt-32 s-cols-12">
        <SecondaryButton event={handleMaintenance} title="Mantenimiento" />
      </div>
      <div className="container-buttons s-center mt-32 s-cols-12">
        <SecondaryButton event={handleDiscount} title="Descuentos" />
      </div>
    </>
  );
};

export default CartWithoutProducts;
