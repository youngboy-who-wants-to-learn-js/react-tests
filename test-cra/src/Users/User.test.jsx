import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

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

describe("USERS TEST", () => {
  test("render list", async () => {
    axios.get.mockReturnValue(response);

    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );

    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });
});
