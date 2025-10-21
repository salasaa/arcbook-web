import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { formatPrice } from "~/lib/format";
import type { Products } from "~/modules/product/type";

export function ProductsGrid({ products }: { products: Products }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.slug}`}>
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-end">
                  <p className="text-xl font-bold ">
                    <div className="price-container">
                      {product.originalPrice > product.price && (
                        <span className="text-gray-500 line-through text-sm mr-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-red-600">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </p>
                  <p className="text-md text-muted-foreground">
                    Stock: {product.inStock ? "In stock" : "Out of stock"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
