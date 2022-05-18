import { addFullServicesToCart } from 'actions/cart';
import { startMaintenanceCustomService } from 'actions/maintenance';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useMaintenanceBasic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    nameMaintenance,
    arrayDetails: services,
    _id: basicID,
  } = useSelector((state) => state.dataMaintenanceBasic);

  const uploadCustomServices = () => {
    history.push(`/maintenances/${nameMaintenance}`);
    dispatch(startMaintenanceCustomService(basicID, nameMaintenance, services));
  };

  const addToCartWithFullServices = () => {
    dispatch(addFullServicesToCart(basicID, nameMaintenance, services));
  };

  return {
    uploadCustomServices,
    services,
    addToCartWithFullServices,
    basicID,
  };
};

export default useMaintenanceBasic;
