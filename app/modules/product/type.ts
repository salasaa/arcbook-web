export type Product = {
  category: any;
  id: string;
  slug: string;
  title: string;
  authorId?: string;
  price: number;
  originalPrice: number;
  description?: string | null;
  imageUrl: string;
  inStock: boolean;
  publishYear: number;
  categoryId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type Products = Product[];
