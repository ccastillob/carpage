import 'react-lazy-load-image-component/src/effects/blur.css';

import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionBanner from 'components/molecules/SectionBanner';
import SectionModel from 'components/molecules/SectionModel';
import SectionMaintenance from 'components/molecules/SectionMaintenance';
import SectionDiscount from 'components/molecules/SectionDiscount';
import SectionEvent from 'components/molecules/SectionEvent';

const HomePage = () => {
  return (
    <>
      <HeaderMenu status="home" />
      <main className="main-container homepage">
        <SectionBanner />
        <SectionModel />
        <SectionMaintenance />
        <SectionDiscount />
        <SectionEvent />
      </main>
      <FooterMenu status="home" />
    </>
  );
};

export default HomePage;
