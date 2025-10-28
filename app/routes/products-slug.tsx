import { useState } from "react";
import { formatPrice } from "~/lib/format";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Badge } from "~/components/ui/badge";
import type { Route } from "./+types/products-slug";
import type { Product, Products } from "~/modules/product/type";
import { ShoppingCart } from "lucide-react";
import { Form } from "react-router";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `${loaderData.product.title} - Arcbooks E-Commerce` },
    {
      name: "description",
      content: loaderData.product.description,
    },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const slug = params.slug;
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${slug}`
  );
  const product: Product = await response.json();
  return { product };
}

export default function ProductsSlugRoute({
  loaderData,
}: Route.ComponentProps) {
  const { product } = loaderData;
  const [quantity, setQuantity] = useState(1);

  function changeImage(imageUrl: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section>
      <div className="mx-auto max-w-5xl justify-center px-4 py-8 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="w-full overflow-hidden border shadow-lg">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-full object-fit"
              />
            </div>
            <div className="flex gap-4 py-4 overflow-x-auto">
              <img
                src={product.imageUrl}
                className="size-16 sm:size-20 object-fit cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                onClick={() => changeImage(product.imageUrl)}
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            {product.author && (
              <p className="mb-1 text-sm text-gray-400 line-clamp-1">
                {product.author.name}
              </p>
            )}
            <h1 className="text-4xl font-bold mb-2">{product.title}</h1>

            <div className=" gap-3 mb-4 text-sm">
              <Separator orientation="vertical" className="h-4" />
              <span
                className={
                  product.inStock
                    ? "text-green-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <Separator className="my-4" />
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-bold text-gray-600 dark:text-gray-200">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-2 mb-2">
                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <Badge variant="secondary" className="mt-2 w-fit">
                      {(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                        100
                      ).toFixed(0)}
                      %
                    </Badge>
                  )}
                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through text-md">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center rounded-md">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </Button>
              </div>

              <Form method="post">
                <input className="hidden" type="number" value={quantity} />
                <Button
                  type="submit"
                  size="lg"
                  className="flex-grow h-12 text-base"
                  disabled={!product.inStock}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <Separator className="my-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
              {product.description || "Description not available."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-4">Detail</h2>
            <dl className="space-y-2 text-gray-600">
              <div className="space-y-1">
                <dt className="text-sm font-medium text-gray-400">
                  Product ID
                </dt>
                <dd>{product.id}</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-gray-400">Category</dt>
                <dd>{product.category?.name}</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-gray-400">Publish</dt>
                <dd>{Number(product.publishYear)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
