import { addDiscountToCart, addModelToCart } from 'actions/cart';
import { useDispatch, useSelector } from 'react-redux';

const useProduct = () => {
  const dispatch = useDispatch();
  const { id, name, price, listColors, percentage } = useSelector(
    (state) => state.currentProduct
  );

  const addToCartModel = () => {
    percentage
      ? dispatch(
          addDiscountToCart(
            id,
            name,
            (price * (100 - percentage)) / 100,
            listColors
          )
        )
      : dispatch(addModelToCart(id, name, price, listColors));
  };

  return {
    productID: id,
    productName: name,
    productPrice: price,
    addToCartModel,
    currentColor: listColors,
    percentage,
  };
};

export default useProduct;
