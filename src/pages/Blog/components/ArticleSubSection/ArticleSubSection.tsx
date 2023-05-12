import { Heading, HeadingProps } from "@/components/ui/atoms/Heading/Heading";
import { Quote } from "@/components/ui/atoms/Quote/Quote";
import { UiList } from "@/components/ui/objects/UiList/UiList";
import styles from "./ArticleSubSection.module.scss";
import classNames from "classnames";

interface ArticleListProps extends Pick<HeadingProps, "level"> {
  title: string;
  description: string;
  list: string[];
  showQuote?: boolean;
  listTye?: "circle" | "numeric";
}

export const ArticleSubSection = ({
  showQuote = false,
  level,
  listTye = "circle",
  description,
  list,
  title,
}: ArticleListProps) => {
  return (
    <section className={styles["article-section"]}>
      <Heading level={level} size="medium">
        {title}
      </Heading>
      <p className={styles["article-section__description"]}>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has less normal
        distribution of letters, as opposed.
      </p>
      <div className={classNames(styles["article-section__list"])}>
        <UiList type={listTye}>
          <>It has roots in a piece of classical Latin literature from 45 BC, To generate Lorem</>
          <>Ipsum which looks reasonable</>
          <>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</>
        </UiList>
      </div>
      {showQuote && (
        <Quote>
          “Crowdsource term sheet freemium beta stealth responsive web design niche market rock star
          channels.”
        </Quote>
      )}
    </section>
  );
};
