import { BookList } from "@/components/Books/components/BookList/BookList";
import { useBooksByLimit } from "@/components/Books/hooks/useBooksByLimit";
import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./Store.module.scss";
import SubscriptionArticle from "@/components/common/SubscriptionArticle/SubscriptionArticle";
import { StoreRoutes } from "./routes/StoreRoutes";

export const Store = () => {
  return (
    <>
      <HeroInfo title="My Store">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <StoreRoutes />
    </>
  );
};
