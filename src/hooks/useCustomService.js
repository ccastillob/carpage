import { addCustomServicesToCart } from 'actions/cart';
import { resetMaintenanceCustomServices } from 'actions/maintenance';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useCustomService = () => {
  const { customServices, id, name } = useSelector(
    (state) => state.currentMaintenanceServices
  );
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (customServices.length === 0) {
      return history.push('/maintenances');
    }
  }, [customServices, history]);

  const addToCartCustomServices = () => {
    dispatch(addCustomServicesToCart(id, name, customServices));
    dispatch(resetMaintenanceCustomServices());
  };

  return {
    customServices,
    addToCartCustomServices,
  };
};

export default useCustomService;
