import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";
import { renderWithReduxStore } from "../tests/helpers/renderWithReduxStore";

describe("Counter", () => {
  test("Counter increment test", () => {
    const { getByTestId } = renderWithReduxStore(<Counter />);
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("0");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("1");
  });
});
