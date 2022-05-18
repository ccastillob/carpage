import PrimaryButton from 'components/atoms/PrimaryButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const EventSectionBannerRight = ({
  pathImage,
  title,
  description,
  shadedText,
  continueText,
  eventLocation,
}) => {
  return (
    <section className="section-banner border-section">
      <LazyLoadImage
        className="banner__hero-image"
        src={`/assets/${pathImage}`}
        alt="imageAudiEvolution"
        effect="blur"
      />
      <div className="banner__overlay"></div>
      <article className="ed-grid article__banner m-grid-2">
        <div className="banner__content m-cols-1 m-x-2">
          <h1 className="title-color-dark ">{title}</h1>
          <h2 className="title-color-dark pt-24">
            {description}{' '}
            <span className="subtitle-font primary-color">{shadedText}</span>{' '}
            {continueText}.
          </h2>
          <p className="content-color-dark pt-20">Lugar: {eventLocation}</p>
          <PrimaryButton
            urlTo="#"
            othersClass="mt-32 inactive-color"
            title="Registrate aquí"
          />
          <h6 className="title-color-dark">*Opción aún no habilitada</h6>
        </div>
      </article>
    </section>
  );
};

export default EventSectionBannerRight;
