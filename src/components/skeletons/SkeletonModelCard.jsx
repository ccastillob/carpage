import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonHeader from './SkeletonHeader';

const SkeletonModelCard = ({ dataArrLength }) => {
  return (
    <>
      <SkeletonHeader />
      <SkeletonTheme baseColor="#8e8e8f">
        <main className="main-container modelpage">
          <section className="section-card ed-grid s-grid-12 rows-gap">
            {Array(dataArrLength)
              .fill()
              .map((card, index) => (
                <div
                  key={index}
                  className="p-relative card-container s-cols-12 m-cols-4 lg-cols-3"
                >
                  <div className="container__img s-ratio-16-9 img-container">
                    <Skeleton
                      style={{ position: 'absolute' }}
                      height={`100%`}
                      width={`100%`}
                    />
                  </div>
                  <div className="container__text s-pxy-4">
                    <h3 className="title-color">
                      <Skeleton width={`60%`} />
                    </h3>
                    <h4 className="text__description content-color s-pt-2">
                      <Skeleton width={`100%`} />
                      <Skeleton width={`95%`} />
                    </h4>
                    <h4 className="content-color s-pt-4">
                      <Skeleton width={`20%`} />
                    </h4>
                    <Skeleton
                      className="mt-32 button button-secondary"
                      width={`40%`}
                      height={30}
                    />
                  </div>
                </div>
              ))}
          </section>
        </main>
      </SkeletonTheme>
    </>
  );
};

export default SkeletonModelCard;
