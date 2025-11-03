import Cookies from "js-cookie";

import type { Route } from "./+types/dashboard";
import type { MeResponse } from "~/modules/user/type";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard - Arcbooks E-Commerce" }];
}

export async function clientLoader() {
  const token = Cookies.get("token");

  if (!token) return redirect("/login");

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/me`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const meResponse: MeResponse = await response.json();
  return { meResponse };
}

export default function HomeRoute({ loaderData }: Route.ComponentProps) {
  const { meResponse } = loaderData;

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="w-full max-w-7xl min-h-screen p-4 text-gray-800 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h1>{meResponse.fullName}</h1>

        <pre>{JSON.stringify(meResponse, null, 2)}</pre>
      </div>
    </div>
  );
}
