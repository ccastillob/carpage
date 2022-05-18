import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonDiscountCard from '../skeletons/SkeletonDiscountCard';
import { useFetchDiscounts } from '../../hooks/useFetchDiscounts';
import ListOfDiscounts from 'components/organisms/ListOfDiscounts';

const DiscountPage = () => {
  const { data: discounts, loading } = useFetchDiscounts();

  return !loading ? (
    <>
      <HeaderMenu status="discount" />
      <main className="main-container discountpage">
        <ListOfDiscounts discounts={discounts} />
      </main>
      <FooterMenu status="discount" />
    </>
  ) : (
    <SkeletonDiscountCard dataArrLength={8} />
  );
};

export default DiscountPage;
