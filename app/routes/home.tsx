import type { Route } from "./+types/home";
import { Loader2 } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arcbooks E-Commerce" },
    {
      name: "description",
      content: "Simple e-commerce for buying books",
    },
  ];
}

type Product = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  priginalPrice: number;
  description?: string | null;
  imageUrl: string;
  inStock: boolean;
  publishYear: number;

  categoryId: string;

  createdAt: Date;
  updatedAt: Date;
};

type Products = Product[];

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(`http://localhost:3000/products`);
  const products: Products = await response.json();
  return products;
}

export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
      <div className="text-lg font-medium text-gray-600 dark:text-gray-400">
        Loading products...
      </div>
    </div>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;

  console.log({ products });

  return (
    <div>
      <h1>Disini halaman Arcbooks</h1>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
