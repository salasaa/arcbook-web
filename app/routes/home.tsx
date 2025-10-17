import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arcbooks E-Commerce" },
    {
      name: "description",
      content: "Simple e-commerce for buying books",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Arcbooks</h1>
    </div>
  );
}
