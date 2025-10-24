import type { Route } from "./+types/products";
import type { Products } from "~/modules/product/type";
import { ProductsSlide } from "~/modules/product/product-slide";
import { Hero } from "~/modules/component/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products -Arcbooks E-Commerce" },
    {
      name: "description",
      content: "All products e-commerce for buying books",
    },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Products = await response.json();
  return { products };
}

export default function ProductsRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="w-full max-w-7xl min-h-screen p-4 text-gray-800 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
        <ProductsSlide products={products} />
      </div>
    </div>
  );
}
