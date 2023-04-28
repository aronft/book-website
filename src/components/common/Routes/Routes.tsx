import { Routes as RoutesRouter, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "@/pages/Home/Home";
import { About } from "@/pages/About/About";
import { NoMatch } from "@/pages/NoMatch/NoMatch";
export const Routes = () => {
  return (
    <RoutesRouter>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </RoutesRouter>
  );
};
