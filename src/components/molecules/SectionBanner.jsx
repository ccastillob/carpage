import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SectionBanner = () => {
  return (
    <section className="section-banner border-section">
      <LazyLoadImage
        className="banner__hero-image"
        src="/assets/imageMainCarHome.jpg"
        alt="imageMainCarHome"
        effect="blur"
      />
      <div className="banner__overlay"></div>
      <article className="ed-grid article__banner">
        <h1 className="title-color-dark">Nuevo Audi Etron GT Quattro</h1>
        <h2 className="content-color-dark pt-24">
          Una idea que evoluciona tu camino.
        </h2>
        <PrimaryButton
          urlTo="/models/audi-e-tron-gt-quattro"
          othersClass="mt-32"
          title="Conócelo aquí"
        />
      </article>
    </section>
  );
};

export default SectionBanner;
