import FooterMenu from '../molecules/FooterMenu';
import HeaderMenu from '../molecules/HeaderMenu';
import { SectionMaintenanceBasic } from '../organisms/SectionMaintenanceBasic';
import SkeletonMaintenance from '../skeletons/SkeletonMaintenance';
import { useFetchMaintenances } from '../../hooks/useFetchMaintenances';
import { SectionMaintenanceAdvanced } from 'components/organisms/SectionMaintenanceAdvanced';

const MaintenancePage = () => {
  const { loading } = useFetchMaintenances();

  return loading ? (
    <SkeletonMaintenance dataArrBasicLength={4} dataArrAdvancedLength={6} />
  ) : (
    <>
      <HeaderMenu status="maintenance" />
      <main className="main-container maintenancepage">
        <SectionMaintenanceBasic />

        <SectionMaintenanceAdvanced />
      </main>
      <FooterMenu status="maintenance" />
    </>
  );
};

export default MaintenancePage;
