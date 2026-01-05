import { Outlet } from "react-router-dom";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";

export function DefaultLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
