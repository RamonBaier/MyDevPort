import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";   

export function Layout() {
  return (
    <>
      <Nav />

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
}