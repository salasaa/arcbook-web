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

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products = await response.json();
  return products;
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
                className="h-52 max-w-32"
              />
              <h2>{product.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
