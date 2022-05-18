import React from 'react';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionDiscountDetails from 'components/organisms/SectionDiscountDetails';

const DiscountDetails = () => {
  return (
    <>
      <HeaderMenu status="discount" />
      <main className="main-container discountdetails">
        <SectionDiscountDetails />
      </main>
      <FooterMenu status="discount" />
    </>
  );
};

export default DiscountDetails;
