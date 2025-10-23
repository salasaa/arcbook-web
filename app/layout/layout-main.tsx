import { Outlet } from "react-router";
import Navbar from "~/modules/component/navbar";

export default function LayoutMain() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <footer>
        <div className="container mx-auto py-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Arcbooks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
