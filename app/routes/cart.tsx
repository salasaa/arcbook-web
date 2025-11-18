import Cookies from "js-cookie";

import { useMemo, useState } from "react";
import { redirect } from "react-router";
import type { Route } from "./+types/cart";
import type { Cart } from "~/modules/cart/schema";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { formatPrice } from "~/lib/format";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard - Arcbooks E-Commerce" }];
}

export async function clientLoader() {
  const token = Cookies.get("token");

  if (!token) return redirect("/login");

  const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    Cookies.remove("token");
    return redirect("/login");
  }

  const cart: Cart = await response.json();
  return { cart };
}

export default function CartRoute({ loaderData }: Route.ComponentProps) {
  const { cart } = loaderData;

  const initialItems = (cart as Cart | undefined)?.items || [];

  const [items, setItems] = useState(() =>
    initialItems.map((it) => ({ ...it }))
  );

  const totalItems = useMemo(
    () => items.reduce((sum, it) => sum + (it.quantity || 0), 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce((sum, it) => sum + it.product.price * (it.quantity || 0), 0),
    [items]
  );

  function updateQuantity(itemId: string, delta: number) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === itemId
          ? { ...it, quantity: Math.max(0, (it.quantity || 0) + delta) }
          : it
      )
    );
  }

  return (
    <div className="mx-auto max-w-7xl items-center justify-between gap-4 px-4 md:px-6 mb-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {items.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Your cart is empty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add some books to your cart to get started.
                </p>
              </CardContent>
            </Card>
          ) : (
            items.map((item) => (
              <Card key={item.id} className="flex items-center gap-4">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.title}
                  className="h-24 w-20 rounded-md object-cover"
                />
                <CardContent className="flex-1 p-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{item.product.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        by {item.product.authorId || "Unknown"}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Badge variant="outline">
                          {formatPrice(item.product.price)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          x {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-medium">
                        {formatPrice(item.product.price * (item.quantity || 0))}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </Button>
                        <div className="w-8 text-center">{item.quantity}</div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <aside>
          <Card className="mx-auto py-8 shadow-lg sticky top-20 z-40">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Items</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Proceed to Checkout</Button>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  );
}
