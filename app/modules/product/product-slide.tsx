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

export function ProductsSlide({ products }: { products: Products }) {
  return (
    <section>
      <ul className="flex space-x-4 overflow-x-auto py-8 mt-8">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.slug}`}>
                <div title={product.category?.name}></div>
                <Card className="w-48 flex-shrink-0">
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
                        <span className="text-md font-bold text-red-400">
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
    </section>
  );
}
