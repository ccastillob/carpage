import { startMaintenanceAdvancedData } from 'actions/maintenanceAdvanced';
import { startMaintenanceBasicData } from 'actions/maintenanceBasic';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMaintenances } from '../helpers/getAllMaintenances';

export const useFetchMaintenances = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllMaintenances()
      .then((infoData) => {
        setState({
          data: infoData.allListMaintenances,
          loading: false,
        });
      })
      .catch(() => {
        setState({
          data: undefined,
          loading: true,
        });
      });
  }, []);

  useEffect(() => {
    if (state.data.length > 0) {
      dispatch(startMaintenanceBasicData(state.data[0]?.nameMaintenance));
      dispatch(startMaintenanceAdvancedData(state.data[1]?.nameMaintenance));
    }
  }, [state.data, dispatch]);

  return state;
};
