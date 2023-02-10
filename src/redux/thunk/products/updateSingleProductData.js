import { updateSingleProduct } from "../../actions/productAction";

const updateSingleProductData = (id, product) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = res.json();
    if (data.acknowledged) {
      dispatch(updateSingleProduct());
    }
  };
};

export default updateSingleProductData;
