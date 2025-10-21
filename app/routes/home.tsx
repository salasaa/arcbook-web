import type { Route } from "./+types/home";
import type { Products } from "~/modules/product/type";
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

export async function loader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(`${process.env.BACKEND_API_URL}/products`);
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
  const products = (loaderData ?? []) as Products;

  return (
    <div>
      <h1>Arcbooks E-Commerce</h1>

      <ul className="grid grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="size-52"
              />
              <h2>{product.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
