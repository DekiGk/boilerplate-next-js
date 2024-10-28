import { render, screen } from "@testing-library/react";
import Custom500 from "../../pages/500";

test("renders custom 500 page", () => {
  render(<Custom500 />);

  expect(
    screen.getByText("500 - Server-side error occurred")
  ).toBeInTheDocument();
});
