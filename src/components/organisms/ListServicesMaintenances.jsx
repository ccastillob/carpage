import React from 'react';
import ServiceMaintenance from './ServiceMaintenance';

const ListServicesMaintenances = ({ services }) => {
  return (
    <div className="container-services pt-20 ed-grid col-gap-32 s-grid-6 row-gap-4">
      {services?.map(({ _id, nameDetail }) => (
        <ServiceMaintenance key={_id} nameDetail={nameDetail} />
      ))}
    </div>
  );
};

export default React.memo(ListServicesMaintenances);
