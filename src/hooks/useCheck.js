import { updateMaintenanceCustomServices } from 'actions/maintenance';
import { useDispatch, useSelector } from 'react-redux';

const useCheck = ({ id, isCheck }) => {
  const dispatch = useDispatch();
  const {
    customServices,
    id: maintenanceID,
    name,
  } = useSelector((state) => state.currentMaintenanceServices);

  const changeStateOfCheck = () => {
    const getNewStateOfCheck = customServices.map((service) => {
      if (service._id === id) {
        return {
          ...service,
          stateDetail: !isCheck,
        };
      }

      return service;
    });

    dispatch(
      updateMaintenanceCustomServices(maintenanceID, name, getNewStateOfCheck)
    );
  };

  return {
    changeStateOfCheck,
  };
};

export default useCheck;
