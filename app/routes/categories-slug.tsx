import type { Products } from "~/modules/product/type"; // Asumsi tipe Products
import { ProductsSlider } from "~/modules/product/product-slider";

interface CategoryLoaderData {
  products: Products;
  slug: string;
}

export function meta({ loaderData }: { loaderData: CategoryLoaderData }) {
  const categorySlug = loaderData.slug || "Category";
  const categoryTitle =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

  return [
    { title: `${categoryTitle} Books - Arcbooks E-Commerce` },
    {
      name: "description",
      content: `Browse and buy all books in the ${categoryTitle} category.`,
    },
  ];
}

export async function clientLoader({
  params,
}: {
  params: { slug: string };
}): Promise<CategoryLoaderData> {
  const slug = params.slug;

  const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/categories/${slug}`;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Response("Category or data not found", { status: 404 });
  }

  const products: Products = await response.json();

  return { products, slug };
}

export default function CategorySlugRoute({
  loaderData,
}: {
  loaderData: CategoryLoaderData;
}) {
  const { products, slug } = loaderData;
  const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <section className="w-full max-w-7xl min-h-screen p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-8">
          Books in Category:{" "}
          <span className="text-primary">{categoryTitle}</span>
        </h1>

        {products.length > 0 ? (
          <ProductsSlider products={products} />
        ) : (
          <p>No products found in this category.</p>
        )}
      </section>
    </div>
  );
}
