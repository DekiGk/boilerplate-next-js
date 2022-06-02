import { render } from "@testing-library/react";
import { debug } from "console";
import Home, { getServerSideProps } from "../pages";

const MOCKED_IMAGE =
  "https://images.dog.ceo/breeds/spaniel-welsh/n02102177_3524.jpg";
const MOCKED_STATUS = "success";

describe("Home", () => {
  it("should render all elements correctly", () => {
    const { getByText } = render(
      <Home ssrProps={{ message: MOCKED_IMAGE, status: MOCKED_STATUS }} />
    );

    expect(getByText("Hello")).toBeInTheDocument();
  });

  describe("getServerSideProps()", () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it("should getServerSideProps correctly", async () => {
      fetchMock.mockResponseOnce(
        JSON.stringify({
          message: MOCKED_IMAGE,
          status: MOCKED_STATUS,
        })
      );
      const response = await getServerSideProps();

      expect(response.props.ssrProps.message).toEqual(MOCKED_IMAGE);
      expect(response.props.ssrProps.status).toEqual(MOCKED_STATUS);
    });

    it("should catch an error in getServerSideProps", async () => {
      fetchMock.mockAbortOnce();

      await expect(getServerSideProps()).rejects.toThrow();
    });
  });
});
