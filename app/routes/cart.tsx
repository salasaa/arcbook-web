import Cookies from "js-cookie";

import { redirect } from "react-router";
import { DashboardForm } from "~/components/dashboard-form";
import type { User } from "~/modules/user/type";
import type { Route } from "./+types/cart";
import type { Cart } from "~/modules/cart/schema";

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

  const meResponse: Cart = await response.json();
  return { meResponse };
}

export default function CartRoute({ loaderData }: Route.ComponentProps) {
  const { meResponse } = loaderData;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
