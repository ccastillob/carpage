import React from 'react';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import ListCustomServicesMaintenances from 'components/organisms/ListCustomServicesMaintenances';
import ContainerCustomServiceButton from 'components/molecules/ContainerCustomServiceButton';
import ContainerTotalCustomServices from 'components/atoms/ContainerTotalCustomServices';

const MaintenanceDetails = ({ match }) => {
  return (
    <>
      <HeaderMenu status="maintenance" />
      <main className="main-container maintenancedetails">
        <section className="section-maintenance-details ed-grid s-grid-12">
          <h2 className="title-color s-cols-12">
            Mantenimiento{' '}
            {match.params.nameType === 'basic' ? 'Básico' : 'Avanzado'}
          </h2>
          <h3 className="content-color s-cols-12 pt-24">
            Aquí podrás personalizar que servicios deseas agregar o quitar de
            este paquete.
          </h3>

          <ListCustomServicesMaintenances />

          <ContainerTotalCustomServices />

          <ContainerCustomServiceButton />
        </section>
      </main>
      <FooterMenu status="maintenance" />
    </>
  );
};

export default MaintenanceDetails;
