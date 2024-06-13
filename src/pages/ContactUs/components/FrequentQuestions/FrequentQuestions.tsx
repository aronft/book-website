import { Heading } from "@/components/ui/atoms/Heading/Heading";
import { SectionTitle } from "@/components/ui/molecules/SectionTitle/SectionTitle";
import { Container } from "@/components/ui/objects/Container/Container";
import { UiList } from "@/components/ui/objects/UiList/UiList";
import styles from "./FrequentQuestions.module.scss";
import { Question } from "../Question/Question";
import { useState } from "react";
import { QUESTIONS } from "../../data/questions";

export const FrequentQuestions = () => {
  const [questions, setQuestions] = useState(QUESTIONS);

  const openQuestion = (questionId: string) => {
    const updateQuestions = questions.map((question) => {
      if (question.id === questionId) {
        question.active = !question.active;
      } else {
        question.active = false;
      }
      return question;
    });

    setQuestions(updateQuestions);
  };

  return (
    <section className={styles.section}>
      <Container className={styles["frequent-questions"]}>
        <SectionTitle separator aligment="middle">
          Frequent Questions?
        </SectionTitle>
        <div className={styles.questions}>
          <UiList space="none">
            {questions.map((question) => (
              <Question
                id={question.id}
                key={question.id}
                question={question.question}
                answers={question.answers}
                state={question.active}
                onClick={(id) => {
                  openQuestion(id);
                }}
              />
            ))}
          </UiList>
        </div>
      </Container>
    </section>
  );
};
