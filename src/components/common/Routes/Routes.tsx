import { Routes as RoutesRouter, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "@/pages/Home/Home";
import { About } from "@/pages/About/About";
import { NoMatch } from "@/pages/NoMatch/NoMatch";
import { Store } from "@/pages/Store/Store";
import { ContactUs } from "@/pages/ContactUs/ContactUs";
import { Blog } from "@/pages/Blog/Blog";
import { SingleBlog } from "@/pages/Blog/SingleBlog/SingleBlog";
export const Routes = () => {
  return (
    <RoutesRouter>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="articles" element={<Blog />} />
        <Route path="articles/:id" element={<SingleBlog />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </RoutesRouter>
  );
};
