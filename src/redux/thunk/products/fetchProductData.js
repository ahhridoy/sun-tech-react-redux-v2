import { fetchProduct } from "../../actions/productAction";

const fetchProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    if (data.data.length) {
      dispatch(fetchProduct(data.data));
    }
  };
};

export default fetchProductData;
