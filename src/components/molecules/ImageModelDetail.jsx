import useProduct from 'hooks/useProduct';
import useUI from 'hooks/useUI';
import React from 'react';
import { SwapSpinner } from 'react-spinners-kit';

const ImageModelDetail = () => {
  const { currentColor } = useProduct();
  const { showImage, uploadedImage } = useUI();

  const handleImage = (evt) => {
    uploadedImage(evt);
  };

  return (
    <>
      {currentColor && (
        <div
          className={`top-container__img s-ratio-16-9 img-container m-cols-6 ${
            !showImage && 'border-image-loader'
          }`}
        >
          <img
            onLoad={handleImage}
            className={`s-radius-2 ${!showImage && 'opacity-image-loader'}`}
            src={currentColor[0]?.image}
            alt="modelDetail"
          />
          {!showImage && (
            <div className="center-child">
              <SwapSpinner color="#0080CA" size={70} />
            </div>
          )}
          <div className="img-overlay"></div>
        </div>
      )}
    </>
  );
};

export default React.memo(ImageModelDetail);
