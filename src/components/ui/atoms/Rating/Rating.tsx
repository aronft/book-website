import styles from "./Rating.module.scss";

interface RatingProps {
  totalRating: number;
  actualRating: number;
  withDescription?: boolean;
}
// {id: 0, value: 0}
export const Rating = ({ totalRating, actualRating, withDescription = false }: RatingProps) => {
  let ratings = Array.from({ length: totalRating }, () => ({ value: 0 }));

  ratings = ratings.map((rating, index) => {
    if (index < Math.trunc(actualRating)) {
      rating.value = 1;
    }

    if (index === Math.trunc(actualRating)) {
      if (actualRating % 1 === 0 && actualRating === totalRating) {
        rating.value = 1;
      } else {
        rating.value = actualRating % 1;
      }
    }

    return rating;
  });
  console.log(ratings);

  return (
    <div className={styles.rating}>
      {ratings.map((item, index) => (
        <span className={styles.rating__item} key={index}>
          <span className={styles.item__bg} style={{ width: `calc(${item.value} * 100%)` }}></span>
        </span>
      ))}
      {withDescription && (
        <span className={styles.rating__description}>({`${actualRating}/${totalRating}`})</span>
      )}
    </div>
  );
};
