import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SectionDiscount = () => {
  return (
    <section className="section-banner border-section">
      <LazyLoadImage
        className="banner__hero-image"
        src="/assets/imageDiscountHome.jpg"
        alt="imageDiscountHome"
        effect="blur"
      />
      <div className="banner__overlay"></div>
      <article className="ed-grid article__banner m-grid-2">
        <div className="banner__content m-cols-1 m-x-2">
          <h1 className="title-color-dark ">Descuentos de temporada</h1>
          <h2 className="content-color-dark pt-24">
            Conoce los mejores descuentos y aprovecha estos precios por tiempo
            limitado.
          </h2>
          <PrimaryButton
            urlTo="/discounts"
            othersClass="mt-32"
            title="Mira los descuentos"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionDiscount;
