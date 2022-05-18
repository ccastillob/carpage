import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import SecondaryButton from '../atoms/SecondaryButton';

const CardDiscount = ({
  arrayColors,
  nameDiscount,
  descriptionDiscount,
  priceDiscount,
  percentage,
}) => {
  const history = useHistory();

  const handleLearnMore = () => {
    const replaceStr = nameDiscount.replace(/ /g, '-');
    const convertToLowerCase = replaceStr.toLowerCase();

    history.push(`/discounts/${convertToLowerCase}`);
  };

  return (
    <div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
      <div className="ed-grid p-relative s-grid-3 s-gap-4 rows-gap">
        <div className="s-cols-3 s-rows-4">
          <div className="container__img s-ratio-16-9 img-container">
            <LazyLoadImage
              className="s-radius-2"
              src={arrayColors[0]?.imageColor}
              alt="imageCardDiscount"
              effect="blur"
            />
            <div className="img-overlay"></div>
          </div>
        </div>
        <h5 className="discount-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">
          {percentage} %
        </h5>
      </div>
      <div className="container__text s-pxy-4">
        <h3 className="title-color">{nameDiscount}</h3>
        <h4 className="text__description content-color s-pt-2">
          {descriptionDiscount}
        </h4>
        <h4 className="content-color s-pt-4">
          $ {((priceDiscount * (100 - percentage)) / 100).toFixed(2)}
        </h4>
        <h5 className="text__price-before content-color s-pt-1">
          $ {priceDiscount.toFixed(2)}
        </h5>
        <SecondaryButton
          event={handleLearnMore}
          title="Conoce más"
          othersClass="mt-32"
        />
      </div>
    </div>
  );
};

export default React.memo(CardDiscount);
