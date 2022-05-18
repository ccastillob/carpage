import { useEffect, useState } from 'react';
import { getAllDiscounts } from '../helpers/getAllDiscounts';

export const useFetchDiscounts = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getAllDiscounts()
      .then((infoData) => {
        setState({
          data: infoData.allListDiscounts,
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
