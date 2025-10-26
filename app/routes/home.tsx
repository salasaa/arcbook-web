import type { Route } from "./+types/home";
import type { Products } from "~/modules/product/type";
import { ProductsSlider } from "~/modules/product/product-slider";
import { Hero } from "~/modules/component/hero";
import { Link } from "react-router";

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
  return { products };
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="w-full max-w-7xl min-h-screen p-4 text-gray-800 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
        <section>
          <Hero />
        </section>
        <section>
          <div className="flex justify-between items-center mt-8 px-4 md:px-0">
            <h2 className="text-2xl font-bold">Top Selling</h2>
            <Link
              to="/products"
              className="text-gray-500 hover:text-primary/50 font-medium whitespace-nowrap"
            >
              See more
            </Link>
          </div>
          <ProductsSlider products={products} />
        </section>
      </div>
    </div>
  );
}
