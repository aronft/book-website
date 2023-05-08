import { BookList } from "@/components/Books/components/BookList/BookList";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./StoreList.module.scss";
import SubscriptionArticle from "@/components/common/SubscriptionArticle/SubscriptionArticle";
import { useBooksByLimit } from "@/components/Books/hooks/useBooksByLimit";
export const StoreList = () => {
  const { books, loading, error } = useBooksByLimit(-1);
  return (
    <Container className={styles["store-section"]}>
      <BookList books={books} />
      <SubscriptionArticle />
    </Container>
  );
};
