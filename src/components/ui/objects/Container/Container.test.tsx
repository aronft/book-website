import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("test Container ", () => {
  test("should render children inside", async () => {
    render(
      <Container>
        <span>hola</span>
      </Container>
    );
    const spanContent = screen.getByText(/hola/);
    expect(spanContent).toBeInTheDocument();
  });

  test("should have a class container", () => {
    const { container } = render(
      <Container className="prueba">
        <span>hola</span>
      </Container>
    );
    expect(container.firstChild).toHaveClass("container");
    expect(container.firstChild).toHaveClass("prueba");
  });
});
