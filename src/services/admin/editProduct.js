import axios from "axios";
import { BASE_ROUTE } from "../../config";

export const editProduct = async (
  id,
  name,
  description,
  price,
  rating,
  image
) => {
  try {
    await axios.put(`${BASE_ROUTE}/admin/edit-product`, {
      id: id,
      name: name.value,
      description: description.value,
      price: price.value,
      rating: rating.value,
      image: image.value,
    });
  } catch (error) {
    console.log("editProduct service error", error);
  }
};
