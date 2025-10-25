import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { formatPrice } from "~/lib/format";
import type { Products } from "~/modules/product/type";

export function ProductsSlider({ products }: { products: Products }) {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6 px-4 md:px-0">
        <h2 className="text-2xl font-bold">Top Selling</h2>
        <Link
          to="/products"
          className="text-gray-500 hover:text-primary/50 font-medium whitespace-nowrap"
        >
          See more
        </Link>
      </div>

      <div className="relative mx-auto flex space-x-8">
        <ul className="flex space-x-4 overflow-x-auto py-8 ">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.slug}`}>
                  <div title={product.category?.name}></div>
                  <Card className="w-48 flex-shrink-0 transition-shadow duration-300 hover:shadow-lg">
                    <CardContent className="">
                      <div className="mb-2 w-full aspect-[3/4] overflow-hidden bg-gray-100 flex items-center justify-center">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-muted-foreground text-xs text-center p-2">
                            No Image
                          </div>
                        )}
                      </div>
                      {product.author && (
                        <CardDescription className="mb-1 text-xs text-gray-400 line-clamp-1">
                          {product.author.name}
                        </CardDescription>
                      )}

                      <CardTitle className="mb-1 text-sm font-semibold line-clamp-2 min-h-[2.5rem]">
                        {product.title}
                      </CardTitle>

                      <p className="flex items-center justify-between">
                        <div className="price-container">
                          {product.originalPrice > product.price && (
                            <span className="text-gray-400 line-through text-xs mr-2">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                          <span className="text-md font-bold text-gray-600 dark:text-gray-200">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
