import { Heading } from "@/components/ui/atoms/Heading/Heading";
import styles from "./Question.module.scss";
import classNames from "classnames";
interface QuestionProps {
  id: string;
  question: string;
  answers: string[];
  state: boolean;
  onClick: (id: string) => void;
}
export const Question = ({ state, question, answers, onClick, id }: QuestionProps) => {
  const activeQuestion = state && styles["circle--active"];

  return (
    <div
      className={styles.question}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={styles.row}>
        <div className={classNames(styles.circle, activeQuestion)}></div>
        <Heading level="h3">{question}</Heading>
      </div>
      {state && answers.length > 0 && (
        <div className={styles.answer}>
          {answers.map((answer, index) => (
            <p key={index} className={styles.answer__description}>
              {answer}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
