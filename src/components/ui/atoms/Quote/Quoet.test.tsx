import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Quote } from "./Quote";

test("render Quote component with child", () => {
  const { asFragment, getByText } = render(<Quote>Prueba</Quote>);
  const blockquoteElement = getByText("Prueba");
  expect(blockquoteElement).toBeInTheDocument();
});
