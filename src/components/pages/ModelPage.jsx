import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import SkeletonModelCard from '../skeletons/SkeletonModelCard';
import { useFetchModels } from '../../hooks/useFetchModels';
import ListOfModels from 'components/organisms/ListOfModels';

const ModelPage = () => {
  const { data: models, loading } = useFetchModels();

  return !loading ? (
    <>
      <HeaderMenu status="model" />
      <main className="main-container modelpage">
        <ListOfModels models={models} />
      </main>
      <FooterMenu status="model" />
    </>
  ) : (
    <SkeletonModelCard dataArrLength={8} />
  );
};

export default ModelPage;
