import useCustomService from 'hooks/useCustomService';
import React from 'react';

const ContainerTotalCustomServices = () => {
  const { customServices } = useCustomService();

  const getServicesWithCheck = customServices.filter(
    (service) => service.stateDetail === true
  );

  const getDetailsOfCustomServices = getServicesWithCheck.map((service) => {
    return {
      id: service._id,
      name: service.nameDetail,
      price: service.priceDetail,
    };
  });

  const getTotalPricesCustomServices = getDetailsOfCustomServices
    .map((service) => service.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="maintenance-container-total ed-grid s-grid-4 s-cols-12 col-gap-16 s-pt-4">
      <h3 className="total__text s-cols-2 content-color s-main-end">TOTAL</h3>
      <h3 className="total__price s-cols-2 content-color m-cols-1 s-main-end m-x-3">
        $ {getTotalPricesCustomServices.toFixed(2)}
      </h3>
    </div>
  );
};

export default ContainerTotalCustomServices;
