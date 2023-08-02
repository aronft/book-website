import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { TypeBook } from "./TypeBook";

describe("TypeBook tests", () => {
  test("should not render if type is print", async () => {
    render(<TypeBook type="print" className="" />);
    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  test('should return an image if the type is "digital" or "vinilo"', () => {
    render(<TypeBook type="digital" className="" />);
    render(<TypeBook type="vinilo" className="" />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
  });

  test("should image has an alt with text", () => {
    render(<TypeBook type="digital" className="" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt");
    expect(image).toHaveAttribute("alt");
    expect(image.getAttribute("alt")?.length).toBeGreaterThan(0);
    expect(image.getAttribute("alt")?.length).toBeGreaterThan(0);
  });
});
