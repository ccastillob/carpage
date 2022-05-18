import TextDataModelDetail from 'components/atoms/TextDataModelDetail';
import ContainerButtonProduct from 'components/molecules/ContainerButtonProduct';
import ImageModelDetail from 'components/molecules/ImageModelDetail';
import SkeletonModelDetails from 'components/skeletons/SkeletonModelDetails';
import useModel from 'hooks/useModel';
import useProduct from 'hooks/useProduct';
import React from 'react';
import ListOfColors from './ListOfColors';
import TechnicalSpecifications from './TechnicalSpecifications';

const SectionModelDetails = () => {
  const { productID, productName, productPrice, addToCartModel } = useProduct();
  const { description, potency, velocity, acceleration, listColors } =
    useModel();

  return listColors ? (
    <section className="section-modeldetails ed-grid s-grid-12">
      <div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
        <ImageModelDetail />

        <div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
          <TextDataModelDetail
            name={productName}
            description={description}
            price={productPrice}
          />
          <ListOfColors listColors={listColors} />
          <ContainerButtonProduct
            modelID={productID}
            addToCart={addToCartModel}
          />
        </div>
      </div>

      <TechnicalSpecifications
        potency={potency}
        velocity={velocity}
        acceleration={acceleration}
      />
    </section>
  ) : (
    <SkeletonModelDetails />
  );
};

export default SectionModelDetails;
