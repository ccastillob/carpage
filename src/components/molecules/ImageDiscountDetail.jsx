import useProduct from 'hooks/useProduct';
import useUI from 'hooks/useUI';
import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';

const ImageDiscountDetail = () => {
  const { currentColor, percentage } = useProduct();
  const { showImage, uploadedImage } = useUI();

  const handleImage = (evt) => {
    uploadedImage(evt);
  };

  return (
    <>
      {currentColor && (
        <div
          className={`top-container__image ed-grid p-relative s-grid-3 s-gap-4 rows-gap m-cols-6 ${
            !showImage && 'border-image-loader'
          }`}
        >
          <div className="s-cols-3 s-rows-4">
            <div className="container__img s-ratio-16-9 img-container">
              <img
                onLoad={handleImage}
                className={`s-radius-2 ${!showImage && 'opacity-image-loader'}`}
                src={currentColor[0]?.image}
                alt="discountDetail"
              />
              {!showImage && (
                <div className="center-child">
                  <SwapSpinner color="#0080CA" size={70} />
                </div>
              )}
              <div className="img-overlay"></div>
            </div>
          </div>
          <h2 className="discountdetails-box__percentage s-x-3 s-y-1 s-main-center s-cross-center">
            {percentage} %
          </h2>
        </div>
      )}
    </>
  );
};

export default React.memo(ImageDiscountDetail);
