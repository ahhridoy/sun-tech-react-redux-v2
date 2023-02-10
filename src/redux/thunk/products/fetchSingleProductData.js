import { fetchSingleProduct } from "../../actions/productAction";

const fetchSingleProductData = (id) => {
  return async (dispatch, getState) => {
    await fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchSingleProduct(data)));
  };
};

export default fetchSingleProductData;
