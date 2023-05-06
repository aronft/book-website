import { Container } from "@/components/ui/objects/Container/Container";
import styles from "./TestimonialSection.module.scss";
import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { Separator } from "@/components/ui/atoms/Separator/Separator";
import { Rating } from "@/components/ui/atoms/Rating/Rating";
import { TestimonialCard } from "@/components/ui/molecules/TestimonialCard/TestimonialCard";
import avatar1 from "@/assets/images/users/user-1.png";

export const TestimonialSection = () => {
  return (
    <section className={styles["testimonial-section"]}>
      <Container className={styles["testimonial-section__content"]}>
        <div className={styles["testimonial-section__left"]}>
          <div className={styles["testimonial-section__title"]}>
            <Heading level="h2" size="semi-large">
              What Readers Say About the Book
            </Heading>
            <Separator color="secondary" orientation="horizontal" size="medium" />
          </div>
          <p className={styles["testimonial-section__description"]}>
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
          </p>
          <div className={styles["testimonial-section__rating"]}>
            <Rating actualRating={4.5} totalRating={5} withDescription />
            <p className={styles.rating__description}>Overall Customer Ratings</p>
          </div>
        </div>
        <div className={styles["testimonial-section__right"]}>
          <div className={styles.testimonials}>
            <TestimonialCard
              user={{ name: "Martin Philips", profileImage: avatar1 }}
              description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
              title="titleAwesome Impact"
            />
            <TestimonialCard
              user={{ name: "Martin Philips", profileImage: avatar1 }}
              description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
              title="titleAwesome Impact"
            />
            <TestimonialCard
              user={{ name: "Martin Philips", profileImage: avatar1 }}
              description="All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value."
              title="titleAwesome Impact"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
