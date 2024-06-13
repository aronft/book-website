import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./ChapterOverviewSection.module.scss";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Button } from "@/components/ui/atoms/Button";
import { Link } from "@/components/ui/atoms/Link/Link";
import { Chapter } from "./components/Chapter/Chapter";

export const ChapterOverviewSection = () => {
  const chapters = [
    {
      title: "Chapter-01   Get Started Intro",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: 85,
      length: "1 Hour 15 mins",
    },
    {
      title: "Chapter-02   Create a Massive Content",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: 85,
      length: "1 Hour 15 mins",
    },
    {
      title: "Chapter-03   Maintaining the Creative Arcs",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: 85,
      length: "1 Hour 15 mins",
    },
    {
      title: "Chapter-04   The Conclusion",
      description:
        "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
      pages: 85,
      length: "1 Hour 15 mins",
    },
  ];

  return (
    <section className={styles["chapter-overview"]}>
      <Container className={styles["chapter-overview__content"]}>
        <SectionTitle separator aligment="middle">
          The Chapter Includes
        </SectionTitle>

        <div className={styles["chapter-overview__list"]}>
          {chapters.map((chapter, index) => (
            <Chapter
              key={index}
              title={chapter.title}
              description={chapter.description}
              length={chapter.length}
              pages={chapter.pages}
            />
          ))}
        </div>

        <footer className={styles["chapter-overview__footer"]}>
          <Button color="secondary" size="large" colorText="primary" href="/contact-us">
            Start a 15-Days Free Trail
          </Button>
          <div className={styles.footer__description}>
            <p>Short description about each chapter</p>
            <p>
              <Link href=""> Have any questions? </Link> Contact us
            </p>
          </div>
        </footer>
      </Container>
    </section>
  );
};
