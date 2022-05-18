import React from 'react';
import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionModelDetails from 'components/organisms/SectionModelDetails';

const ModelDetails = () => {
  return (
    <>
      <HeaderMenu status="model" />
      <main className="main-container modeldetails">
        <SectionModelDetails />
      </main>
      <FooterMenu status="model" />
    </>
  );
};

export default ModelDetails;
