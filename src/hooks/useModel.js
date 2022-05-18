import { resetModelData, startModelData } from 'actions/model';
import { resetCurrentProduct } from 'actions/product';
import { hiddenImageProduct } from 'actions/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useModel = () => {
  const { nameModel: productParameter } = useParams();
  const dispatch = useDispatch();
  const { descriptionModel, potency, velocity, acceleration, arrayColors } =
    useSelector((state) => state.dataModel);

  useEffect(() => {
    const convertText = productParameter
      .replace(/\b\w/g, (product) => product.toUpperCase())
      .replace(/-/g, ' ');
    let product = convertText.replace('E Tron', 'E-tron');
    product = product.replace('Gt', 'GT');
    dispatch(resetModelData());
    dispatch(resetCurrentProduct());
    dispatch(hiddenImageProduct());
    dispatch(startModelData(product));
  }, [productParameter, dispatch]);

  return {
    description: descriptionModel,
    potency,
    velocity,
    acceleration,
    listColors: arrayColors,
  };
};

export default useModel;
