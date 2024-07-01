import { Category } from "@/types/types";
import axios from "axios";


const BASEURL = "http://localhost:1337/api";

export const getCategories = async function (): Promise<Category[]> {
  try {
    const response = await axios.get(`${BASEURL}/categories?populate=*`);
    const data = response.data.data;
    

    return data.map((item: any) => ({
      name: item.attributes.name,
      url: item.attributes.icon.data.attributes.url,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
