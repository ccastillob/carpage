import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SectionMaintenance = () => {
  return (
    <section className="section-maintenance border-section">
      <article className="article-maintenance">
        <h1 className="title-color s-center">Mantenimiento</h1>
        <div className="maintenance__group p-relative mt-32 ed-grid m-grid-2 row-gap s-pt-4 m-pt-0">
          <div className="maintenance__group-left border m-pt-4 m-px-4">
            <div className="group-left__container-img ed-grid s-grid-1 m-grid-7">
              <div className="s-ratio-16-9 img-container m-cols-5 m-x-2">
                <LazyLoadImage
                  className="s-radius-2"
                  src="/assets/imageMaintenanceBasic.jpg"
                  alt="imageMaintenanceBasic"
                  effect="blur"
                />
                <div className="img-overlay"></div>
              </div>
            </div>
            <h2 className="title-color s-center s-pt-1 m-pt-2">Básico</h2>
            <p className="content-color group-left__description m-pt-2">
              Dedicado a personas que bucan cuidar el estado de su auto día con
              día.
            </p>
          </div>
          <div className="maintenance__group-right m-pt-4 m-px-4">
            <div className="group-right__container-img ed-grid s-grid-1 m-grid-7">
              <div className="s-ratio-16-9 img-container m-cols-5 m-x-2">
                <LazyLoadImage
                  className="s-radius-2"
                  src="/assets/imageMaintenanceAdvanced.jpg"
                  alt="imageMaintenanceAdvanced"
                  effect="blur"
                />
                <div className="img-overlay"></div>
              </div>
            </div>
            <h2 className="title-color s-center s-pt-1 m-pt-2">Avanzado</h2>
            <p className="content-color group-right__description m-pt-2">
              Dedicado a personas que buscan un mantenimiento más exhaustivo
              para su auto.
            </p>
          </div>
        </div>
        <PrimaryButton
          urlTo="/maintenances"
          othersClass="s-px-2 s-to-center mt-32 s-mb-4 m-mb-0"
          title="Conoce más"
        />
      </article>
    </section>
  );
};

export default SectionMaintenance;
