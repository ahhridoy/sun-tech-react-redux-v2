import {
  ADD_PRODUCT,
  ADD_TO_CART,
  FETCH_PRODUCT,
  FETCH_SINGLE_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

export const fetchProduct = (data) => {
  return {
    type: FETCH_PRODUCT,
    payload: data,
  };
};

export const fetchSingleProduct = (data) => {
  return {
    type: FETCH_SINGLE_PRODUCT,
    payload: data,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const updateSingleProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
