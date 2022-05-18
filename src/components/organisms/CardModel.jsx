import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router-dom';

import SecondaryButton from '../atoms/SecondaryButton';

const CardModel = ({
  arrayColors,
  nameModel,
  descriptionModel,
  priceModel,
}) => {
  const history = useHistory();

  const handleLearnMore = () => {
    const replaceStr = nameModel.replace(/ /g, '-');
    const convertToLowerCase = replaceStr.toLowerCase();

    history.push(`/models/${convertToLowerCase}`);
  };

  return (
    <div className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3">
      <div className="container__img s-ratio-16-9 img-container">
        <LazyLoadImage
          className="s-radius-2"
          src={arrayColors[0]?.imageColor}
          alt={nameModel}
          effect="blur"
        />
        <div className="img-overlay"></div>
      </div>
      <div className="container__text s-pxy-4">
        <h3 className="title-color">{nameModel}</h3>
        <h4 className="text__description content-color s-pt-2">
          {descriptionModel}
        </h4>
        <h4 className="content-color s-pt-4">$ {priceModel.toFixed(2)}</h4>
        <SecondaryButton
          event={handleLearnMore}
          title="Conoce más"
          othersClass="mt-32"
        />
      </div>
    </div>
  );
};

export default React.memo(CardModel);
