import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ListServicesMaintenances from './ListServicesMaintenances';
import ContainerMaintenanceButtons from 'components/molecules/ContainerMaintenanceButtons';
import useMaintenanceBasic from 'hooks/useMaintenanceBasic';

export const SectionMaintenanceBasic = () => {
  const { uploadCustomServices, services, addToCartWithFullServices, basicID } =
    useMaintenanceBasic();

  return (
    <section className="section-banner border-section">
      <LazyLoadImage
        className="banner__hero-image"
        src="/assets/imageMaintenanceBasic.jpg"
        alt="imgBgMaintenanceBasic"
        effect="blur"
      />
      <div className="banner__overlay"></div>
      <article className="ed-grid article__banner m-grid-2">
        <div className="banner__content m-cols-1">
          <h1 className="title-color-dark ">Mantenimiento Básico</h1>
          <p className="content-color-dark pt-24">
            Enfocado a personas que cuidan su auto día con día. Aquí podemos
            encontrar los siguientes servicios:
          </p>
          <ListServicesMaintenances services={services} />
          <ContainerMaintenanceButtons
            uploadCustomServices={uploadCustomServices}
            addToCart={addToCartWithFullServices}
            maintenanceID={basicID}
          />
        </div>
      </article>
    </section>
  );
};
