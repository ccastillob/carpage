import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SectionShopping from 'components/organisms/SectionShopping';

const ShoppingPage = () => {
  return (
    <>
      <HeaderMenu status="shop" />
      <main className="main-container shoppage">
        <SectionShopping />
      </main>
      <FooterMenu />
    </>
  );
};

export default ShoppingPage;
