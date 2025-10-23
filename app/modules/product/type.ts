import type { Author } from "~/modules/author/type";
import type { Category } from "~/modules/category/type";

export type Product = {
  id: string;
  slug: string;
  title: string;
  author?: Author;
  price: number;
  originalPrice: number;
  description?: string | null;
  imageUrl: string;
  inStock: boolean;
  publishYear: number;
  category?: Category;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type Products = Product[];
