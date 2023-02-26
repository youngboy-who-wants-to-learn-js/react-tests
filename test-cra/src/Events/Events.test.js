import { render, screen, fireEvent } from "@testing-library/react";
import { Events } from "./Events";

describe("test Events.js", () => {
  test("renders learn react link", () => {
    render(<Events />);
    const divHelloWorld = screen.getByText(/hello world/i);
    const input = screen.getByPlaceholderText(/placeholder/i);
    const btn = screen.getByRole("button");
    expect(divHelloWorld).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
  });
});

describe("test", () => {
  test("renders learn react link", async () => {
    render(<Events />);
    const div = await screen.findByText("tex1t");
    expect(div).toBeInTheDocument();
  });

  test("click event", () => {
    render(<Events />);
    const btn = screen.getByTestId("btn-toggle");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);

    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
  });

  test("input event", () => {
    render(<Events />);
    const input = screen.getByTestId("input-elem");
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "qwerty" },
    });

    expect(screen.queryByTestId("value-elem")).toContainHTML("qwerty");
  });
});
