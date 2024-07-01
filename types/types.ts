export interface Category {
    name: string;
    url: string;
  }
  
export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  url: string;
  stock: number;
}