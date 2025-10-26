import { Link, Outlet } from "react-router";
import Navbar from "~/modules/component/navbar";
import { Footer } from "~/modules/component/footer";

export default function LayoutMain() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
