import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { ShoppingCart } from "@/pages/Store/components/ShoppingCart/ShoppingCart";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
      <ShoppingCart></ShoppingCart>
    </>
  );
};
