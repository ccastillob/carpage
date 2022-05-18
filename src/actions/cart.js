import { types } from '../types/types';

export const addFullServicesToCart = (maintenanceID, name, services) => {
  return (dispatch) => {
    const getDetailsOfServices = services.map((service) => {
      return {
        id: service._id,
        name: service.nameDetail,
        price: service.priceDetail,
      };
    });

    const getTotalPricesServices = getDetailsOfServices
      .map((service) => service.price)
      .reduce((a, b) => a + b, 0);

    const dataOfMaintenanceFullServices = {
      id: maintenanceID,
      name:
        name === 'basic' ? 'Mantenimiento Básico' : 'Mantenimiento Avanzado',
      tagItem: 'Full',
      price: getTotalPricesServices,
      details: getDetailsOfServices,
    };

    const productsInLocalStorage =
      JSON.parse(localStorage.getItem('cart')) || [];

    dispatch({
      type: types.initializateCart,
      payload: productsInLocalStorage,
    });

    dispatch({
      type: types.addToCart,
      payload: dataOfMaintenanceFullServices,
    });

    localStorage.setItem(
      'cart',
      JSON.stringify([...productsInLocalStorage, dataOfMaintenanceFullServices])
    );
  };
};

export const addCustomServicesToCart = (
  maintenanceID,
  name,
  customServices
) => {
  return (dispatch) => {
    const getServicesWithCheck = customServices.filter(
      (service) => service.stateDetail === true
    );

    const getDetailsOfCustomServices = getServicesWithCheck.map((service) => {
      return {
        id: service._id,
        name: service.nameDetail,
        price: service.priceDetail,
      };
    });

    const getTotalPricesCustomServices = getDetailsOfCustomServices
      .map((service) => service.price)
      .reduce((a, b) => a + b, 0);

    const dataOfMaintenanceCustomServices = {
      id: maintenanceID,
      name:
        name === 'basic' ? 'Mantenimiento Básico' : 'Mantenimiento Avanzado',
      tagItem: 'Personalizado',
      price: getTotalPricesCustomServices,
      details: getDetailsOfCustomServices,
    };

    const productsInLocalStorage =
      JSON.parse(localStorage.getItem('cart')) || [];

    dispatch({
      type: types.initializateCart,
      payload: productsInLocalStorage,
    });

    dispatch({
      type: types.addToCart,
      payload: dataOfMaintenanceCustomServices,
    });

    localStorage.setItem(
      'cart',
      JSON.stringify([
        ...productsInLocalStorage,
        dataOfMaintenanceCustomServices,
      ])
    );
  };
};

export const addModelToCart = (
  productID,
  productName,
  productPrice,
  productSelectedColor
) => {
  return (dispatch) => {
    const dataProductToCart = {
      id: productID,
      name: productName,
      tagItem: 'Normal',
      price: productPrice,
      details: productSelectedColor,
    };

    const productsInLocalStorage =
      JSON.parse(localStorage.getItem('cart')) || [];

    dispatch({
      type: types.initializateCart,
      payload: productsInLocalStorage,
    });

    dispatch({
      type: types.addToCart,
      payload: dataProductToCart,
    });

    localStorage.setItem(
      'cart',
      JSON.stringify([...productsInLocalStorage, dataProductToCart])
    );
  };
};

export const addDiscountToCart = (
  productID,
  productName,
  productPrice,
  productSelectedColor
) => {
  return (dispatch) => {
    const dataProductToCart = {
      id: productID,
      name: productName,
      tagItem: 'Descuento',
      price: productPrice,
      details: productSelectedColor,
    };

    const productsInLocalStorage =
      JSON.parse(localStorage.getItem('cart')) || [];

    dispatch({
      type: types.initializateCart,
      payload: productsInLocalStorage,
    });

    dispatch({
      type: types.addToCart,
      payload: dataProductToCart,
    });

    localStorage.setItem(
      'cart',
      JSON.stringify([...productsInLocalStorage, dataProductToCart])
    );
  };
};

export const removeProductToCart = (productID) => {
  return (dispatch) => {
    const productsInLocalStorage = JSON.parse(localStorage.getItem('cart'));

    const updatedProductsInCart = productsInLocalStorage.filter(
      (product) => product.id !== productID
    );

    dispatch({
      type: types.removeToCart,
      payload: updatedProductsInCart,
    });

    localStorage.setItem('cart', JSON.stringify(updatedProductsInCart));
  };
};
