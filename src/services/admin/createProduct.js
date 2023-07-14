import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const createProduct = async (
  name,
  description,
  price,
  rating,
  image
) => {
  try {
    const createdProduct = await axios.post(
      `${BASE_ROUTE}/admin/create-product`,
      {
        name: name.value,
        description: description.value,
        price: price.value,
        rating: rating.value,
        image: image.value,
      }
    );
    return createdProduct.data;
  } catch (error) {
    console.log("createProduct service error", error);
  }
};
