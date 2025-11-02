import type { Route } from "./+types/register";
import { Form } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

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
    <div>
      <h1>Create new account</h1>

      {/* <Form>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" name="username" />
        </div>
      </Form> */}
    </div>
  );
}
