import type { Route } from "./+types/register";
import { RegisterForm } from "~/components/register-form";

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

  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const fullName = formData.get("fullName")?.toString();
  const password = formData.get("password")?.toString();

  const registerBody = {
    username,
    email,
    fullName,
    password,
  };

  console.log(registerBody);

  // const project = await someApi.updateProject({ title });
  return null;
}
