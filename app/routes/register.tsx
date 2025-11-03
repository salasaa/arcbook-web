import type { Route } from "./+types/register";
import { RegisterForm } from "~/components/register-form";
import type { RegisterResponse } from "~/modules/user/type";
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

export default function RegisterRoute({}: Route.ComponentProps) {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <RegisterForm />
      </div>
    </div>
  );
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const registerBody = {
    username: formData.get("username")?.toString(),
    email: formData.get("email")?.toString(),
    fullName: formData.get("fullName")?.toString(),
    password: formData.get("password")?.toString(),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerBody),
    }
  );
  const registerResponse: RegisterResponse = await response.json();

  console.log(registerResponse);

  return redirect("/login");
}
