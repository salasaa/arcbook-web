import { Link, Outlet } from "react-router";
import Navbar from "~/modules/component/navbar";
import { Footer } from "~/modules/component/footer";

export default function LayoutMain() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
