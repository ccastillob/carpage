import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SectionEvent = () => {
  return (
    <section className="section-event">
      <article className="ed-grid article-event m-grid-2">
        <h1 className="title-color s-center m-cols-2">Eventos</h1>
        <div className="event__container-img ed-grid s-grid-1 m-grid-7 mt-32 m-order-2 s-pt-4 m-pxy-4">
          <div className="container-img__content-img s-ratio-16-9 img-container m-cols-5 m-x-2">
            <LazyLoadImage
              className="s-radius-2"
              src="/assets/imageEventHome.jpg"
              alt="imageEventHome"
              effect="blur"
            />
            <div className="img-overlay"></div>
          </div>
        </div>
        <div className="event__group s-px-4 s-py-4 mt-24 m-order-1">
          <p className="content-color justify">
            Los mejores eventos de autos en todo el mundo le pertenecen a una
            sola marca. ¿Te gustaría saber cuáles son?
          </p>
          <PrimaryButton
            urlTo="/events"
            othersClass="s-to-center m-to-left mt-32"
            title="Si, vamos !"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionEvent;
