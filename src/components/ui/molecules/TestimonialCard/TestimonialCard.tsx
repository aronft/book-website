import { User } from "@/models/User";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Rating } from "../../atoms/Rating/Rating";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  user: User;
  title: string;
  description: string;
}

export const TestimonialCard = ({ user, title, description }: TestimonialCardProps) => {
  return (
    <article className={styles.testimonial}>
      <div className={styles.user}>
        <Avatar srcImage={user.profileImage} />
        <div className={styles.user__info}>
          <p className={styles.user__name}>{user.name}</p>
          <Rating totalRating={5} actualRating={4} />
        </div>
      </div>
      <p className={styles.testimonial__title}>“ {title} ”</p>
      <p className={styles.testimonial__description}>{description}</p>
    </article>
  );
};
