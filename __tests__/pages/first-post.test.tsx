import { render } from "@testing-library/react";
import FirstPost from "../../pages/posts/first-post";

describe("First Post", () => {
  it("should render all elements correctly", () => {
    const { getByText } = render(<FirstPost />);

    expect(getByText("First Post")).toBeInTheDocument();
    expect(getByText("← Back to home")).toBeInTheDocument();
  });
});
