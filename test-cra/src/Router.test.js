import { screen } from "@testing-library/react";
import { App } from "./App";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Users } from "./Users/Users";
import { renderTestApp } from "./tests/helpers/renderTestApp";

jest.mock("axios");

let response;
beforeEach(() => {
  response = {
    data: [
      {
        id: 1,
        name: "Leanne Graham",
      },
      {
        id: 2,
        name: "Ervin Howell",
      },
    ],
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Router test", () => {
  test("Router test", () => {
    renderTestApp(<App />);
    const mainlink = screen.getByTestId("main-link");
    const aboutlink = screen.getByTestId("about-link");

    userEvent.click(aboutlink);
    expect(screen.getAllByTestId("about-page")[0]).toBeInTheDocument();

    userEvent.click(mainlink);
    expect(screen.getAllByTestId("main-page")[0]).toBeInTheDocument();
  });

  test("Should redirect to ErrorPage", () => {
    renderTestApp(<App />, { initialRoute: "/sd" });

    expect(screen.getAllByTestId("error-page")[0]).toBeInTheDocument();
  });

  test("Should redirect to UserPage", async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Users />, { initialRoute: "/users" });

    const users = await screen.findAllByTestId("user-item");
    userEvent.click(users[0]);

    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
