import type { Route } from "./+types/home";
import type { Products } from "~/modules/product/type";
import { ProductsSlide } from "~/modules/product/product-slide";

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
    <div>
      <h1>Arcbooks E-Commerce</h1>

      <section>
        <ProductsSlide products={products} />
      </section>
    </div>
  );
}
