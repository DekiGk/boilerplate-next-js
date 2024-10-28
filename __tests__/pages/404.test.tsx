import { render, screen } from "@testing-library/react";
import Custom404 from "../../pages/404";

test("renders custom 404 page", () => {
  render(<Custom404 />);

  expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
});
