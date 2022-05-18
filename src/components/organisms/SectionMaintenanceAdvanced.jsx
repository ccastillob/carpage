import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ListServicesMaintenances from './ListServicesMaintenances';
import ContainerMaintenanceButtons from 'components/molecules/ContainerMaintenanceButtons';
import useMaintenanceAdvanced from 'hooks/useMaintenanceAdvanced';

export const SectionMaintenanceAdvanced = () => {
  const {
    uploadCustomServices,
    services,
    addToCartWithFullServices,
    advancedID,
  } = useMaintenanceAdvanced();

  return (
    <section className="section-banner border-section">
      <LazyLoadImage
        className="banner__hero-image"
        src="/assets/imageMaintenanceAdvanced.jpg"
        alt="imgBgMaintenanceAdvanced"
        effect="blur"
      />
      <div className="banner__overlay"></div>
      <article className="ed-grid article__banner m-grid-2">
        <div className="banner__content m-cols-1 m-x-2">
          <h1 className="title-color-dark ">Mantenimiento Avanzado</h1>
          <p className="content-color-dark pt-24">
            Enfocado a personas que buscan un mantenimiento más exhaustivo. Aquí
            podemos encontrar los siguientes servicios:
          </p>
          <ListServicesMaintenances services={services} />
          <ContainerMaintenanceButtons
            uploadCustomServices={uploadCustomServices}
            addToCart={addToCartWithFullServices}
            maintenanceID={advancedID}
          />
        </div>
      </article>
    </section>
  );
};
