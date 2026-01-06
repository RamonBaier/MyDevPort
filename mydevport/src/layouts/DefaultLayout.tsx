import { Outlet } from "react-router-dom";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Nav />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}


