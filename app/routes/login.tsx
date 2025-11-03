import type { Route } from "./+types/login";
import { LoginForm } from "~/components/login-form";
import type { LoginResponse } from "~/modules/user/type";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Arcbooks E-Commerce" },
    {
      name: "description",
      content: "Simple e-commerce for buying books",
    },
  ];
}

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const loginBody = {
    email: formData.get("email")?.toString(),

    password: formData.get("password")?.toString(),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginBody),
    }
  );
  const loginResponse: LoginResponse = await response.text();

  console.log(loginResponse);

  return redirect("/dashboard");
}
