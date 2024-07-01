import { Product } from "@/types/types";
import axios from "axios";

const BASEURL = "http://localhost:1337/api";

export const getProducts = async function(): Promise<Product[]> {
  try {
    const response = await axios.get(`${BASEURL}/products?populate=*`);
    const data = response.data.data;

    return data.map((item: any) => {
      const imageUrl = item.attributes.image_url?.data[0]?.attributes?.url || '';
      console.log(imageUrl);

      return {
        name: item.attributes.name,
        description: item.attributes.description,
        price: item.attributes.price,
        category: item.attributes.category.data.attributes.name,
        url: imageUrl,
        stock: item.attributes.stock_quantity,
      };
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};
