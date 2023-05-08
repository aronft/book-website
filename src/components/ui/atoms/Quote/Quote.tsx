import { PropsWithChildren } from "react";
import styles from "./Quote.module.scss";

export const Quote = ({ children }: PropsWithChildren) => {
  return (
    <figure role="blockquote" className={styles.quote}>
      <div className={styles.quote__quotes}>
        <svg
          width="25"
          height="49"
          viewBox="0 0 25 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.9133 24.3635L0.726562 48.5502V0.176758H24.9133V24.3635Z" fill="#FFCA42" />
        </svg>
        <svg
          width="25"
          height="49"
          viewBox="0 0 25 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.9133 24.3635L0.726562 48.5502V0.176758H24.9133V24.3635Z" fill="#FFCA42" />
        </svg>
      </div>

      <blockquote>{children}</blockquote>
    </figure>
  );
};
