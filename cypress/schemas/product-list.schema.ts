import { productSchema } from "./product.schema";

export const productListSchema = {
  type: "array",
  minItems: 1,
  items: productSchema
};