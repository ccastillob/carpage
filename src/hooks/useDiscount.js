import { resetDiscountData, startDiscountData } from 'actions/discount';
import { resetCurrentProduct } from 'actions/product';
import { hiddenImageProduct } from 'actions/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useDiscount = () => {
  const { nameDiscount: productParameter } = useParams();
  const dispatch = useDispatch();
  const { descriptionDiscount, potency, velocity, acceleration, arrayColors } =
    useSelector((state) => state.dataDiscount);

  useEffect(() => {
    const convertText = productParameter
      .replace(/\b\w/g, (product) => product.toUpperCase())
      .replace(/-/g, ' ');
    let product = convertText.replace('E Tron', 'E-tron');
    product = product.replace('Gt', 'GT');
    product = product.replace('Tfsie', 'TFSIe');
    dispatch(resetDiscountData());
    dispatch(resetCurrentProduct());
    dispatch(hiddenImageProduct());
    dispatch(startDiscountData(product));
  }, [productParameter, dispatch]);

  return {
    description: descriptionDiscount,
    potency,
    velocity,
    acceleration,
    listColors: arrayColors,
  };
};

export default useDiscount;
