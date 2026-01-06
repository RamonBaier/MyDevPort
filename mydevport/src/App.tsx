import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { CareerPage } from "./pages/CareerPage";
import { BlogPage } from "./pages/BlogPage";


export default function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}
