import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import DetailBox from './DetailBox';

const SectionModel = () => {
  return (
    <section className="section-model border-section">
      <article className="ed-grid article-model m-grid-2">
        <h1 className="title-color s-center m-cols-2">Modelos</h1>
        <div className="model__container-img ed-grid s-grid-1 m-grid-7 mt-32 m-order-2 m-px-4 m-py-4">
          <div className="container-img__content-img s-ratio-16-9 img-container m-cols-5 m-x-2">
            <LazyLoadImage
              className="s-radius-2"
              src="/assets/imageModelHome.jpg"
              alt="model"
              effect="blur"
            />
            <div className="img-overlay"></div>
          </div>
        </div>
        <div className="model__group s-px-4 s-py-4 mt-24 m-order-1">
          <p className="content-color justify">
            Aquí encontrarás los modelos más destacados con las últimas
            tecnologías que te proporcionarán una mejor experiencia.
          </p>
          <div className="group__detail mt-24 ed-grid m-grid-3 rows-gap">
            <DetailBox
              pathImage="imageModelFirstDetailVelocity.jpg"
              text="Velocidad"
            />
            <DetailBox
              pathImage="imageModelSecondDetailComfort.jpg"
              text="Comodidad"
            />
            <DetailBox
              pathImage="imageModelThridDetailPotency.jpg"
              text="Potencia"
            />
          </div>
          <PrimaryButton
            urlTo="/models"
            othersClass="s-to-center m-to-left mt-32"
            title="Echa un vistazo"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionModel;
