import TextDataDiscountDetail from 'components/atoms/TextDataDiscountDetail';
import ContainerButtonProduct from 'components/molecules/ContainerButtonProduct';
import ImageDiscountDetail from 'components/molecules/ImageDiscountDetail';
import SkeletonDiscountDetails from 'components/skeletons/SkeletonDiscountDetails';
import useDiscount from 'hooks/useDiscount';
import useProduct from 'hooks/useProduct';
import React from 'react';
import ListOfColors from './ListOfColors';
import TechnicalSpecifications from './TechnicalSpecifications';

const SectionDiscountDetails = () => {
  const { productID, productName, productPrice, addToCartModel, percentage } =
    useProduct();
  const { description, potency, velocity, acceleration, listColors } =
    useDiscount();

  return listColors ? (
    <section className="section-discountdetails ed-grid s-grid-12">
      <div className="p-relative content-grid-top ed-grid m-grid-12 s-cols-12">
        <ImageDiscountDetail />

        <div className="top-container__text ed-grid m-grid-6 m-cols-3 s-px-4 s-pt-4 m-pxy-0 m-cols-6">
          <TextDataDiscountDetail
            name={productName}
            description={description}
            price={productPrice}
            percentage={percentage}
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
    <SkeletonDiscountDetails />
  );
};

export default SectionDiscountDetails;
