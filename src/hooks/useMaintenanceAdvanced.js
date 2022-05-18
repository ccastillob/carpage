import { addFullServicesToCart } from 'actions/cart';
import { startMaintenanceCustomService } from 'actions/maintenance';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useMaintenanceAdvanced = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    nameMaintenance,
    arrayDetails: services,
    _id: advancedID,
  } = useSelector((state) => state.dataMaintenanceAdvanced);

  const uploadCustomServices = () => {
    history.push(`/maintenances/${nameMaintenance}`);
    dispatch(
      startMaintenanceCustomService(advancedID, nameMaintenance, services)
    );
  };

  const addToCartWithFullServices = () => {
    dispatch(addFullServicesToCart(advancedID, nameMaintenance, services));
  };

  return {
    uploadCustomServices,
    services,
    addToCartWithFullServices,
    advancedID,
  };
};

export default useMaintenanceAdvanced;
