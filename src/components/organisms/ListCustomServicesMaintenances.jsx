import useCustomService from 'hooks/useCustomService';
import React from 'react';
import CustomServiceMaintenance from './CustomServiceMaintenance';

const ListCustomServicesMaintenances = () => {
  const { customServices } = useCustomService();

  return (
    <div className="maintenance-container-services s-cols-12 ed-grid s-grid-12 row-gap-12 m-row-gap-8 pt-20">
      {customServices.map(({ _id, nameDetail, priceDetail, stateDetail }) => (
        <CustomServiceMaintenance
          key={_id}
          id={_id}
          name={nameDetail}
          price={priceDetail}
          isCheck={stateDetail}
        />
      ))}
    </div>
  );
};

export default ListCustomServicesMaintenances;
