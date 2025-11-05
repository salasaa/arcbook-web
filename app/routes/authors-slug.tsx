import type { Products } from "~/modules/product/type"; // Asumsi tipe Products
import { ProductsSlider } from "~/modules/product/product-slider";

interface AuthorLoaderData {
  products: Products;
  slug: string;
}

export function meta({ loaderData }: { loaderData: AuthorLoaderData }) {
  const authorSlug = loaderData.slug || "Author";
  const authorName = authorSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return [
    { title: `Books by ${authorName} - Arcbooks E-Commerce` },
    {
      name: "description",
      content: `Find all books written by ${authorName}.`,
    },
  ];
}

export async function clientLoader({
  params,
}: {
  params: { slug: string };
}): Promise<AuthorLoaderData> {
  const slug = params.slug;

  const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/authors/${slug}`;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Response("Author or data not found", { status: 404 });
  }

  const products: Products = await response.json();

  return { products, slug };
}

export default function AuthorSlugRoute({
  loaderData,
}: {
  loaderData: AuthorLoaderData;
}) {
  const { products, slug } = loaderData;
  const authorName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <section className="w-full max-w-7xl min-h-screen p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-8">
          Books by Author: <span className="text-primary">{authorName}</span>
        </h1>

        {products.length > 0 ? (
          <ProductsSlider products={products} />
        ) : (
          <p>No books found for this author.</p>
        )}
      </section>
    </div>
  );
}
