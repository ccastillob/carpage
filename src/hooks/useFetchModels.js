import { useEffect, useState } from 'react';
import { getAllModels } from '../helpers/getAllModels';

export const useFetchModels = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllModels()
      .then((infoData) => {
        setState({
          data: infoData.allListModels,
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

  return state;
};
