import { removeProductToCart } from 'actions/cart';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const validateLocalStorage = JSON.parse(localStorage.getItem('cart')) || cart;
  const productsInLocalStorage = useMemo(
    () => cart && validateLocalStorage,
    [cart, validateLocalStorage]
  );

  const removeProductCart = (id) => {
    dispatch(removeProductToCart(id));
  };

  return {
    productsInCart: productsInLocalStorage,
    quantity: productsInLocalStorage.length,
    removeProductCart,
  };
};

export default useCart;
