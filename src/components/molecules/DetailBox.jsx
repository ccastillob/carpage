import { LazyLoadImage } from 'react-lazy-load-image-component';

const DetailBox = ({ pathImage, text }) => {
  return (
    <div className="ed-grid s-grid-4 m-grid-1 col-gap-32 detail__box">
      <div className="box__img s-ratio-4-3 img-container s-cols-2 s-x-2 m-cols-1 m-x-1">
        <LazyLoadImage
          className="s-radius-2"
          src={`/assets/${pathImage}`}
          alt="velocidad"
          effect="blur"
        />
        <div className="img-overlay"></div>
      </div>
      <h4 className="box__text s-pt-1 s-center content-color s-cols-4 m-cols-1">
        {text}
      </h4>
    </div>
  );
};

export default DetailBox;
