import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { renderTestApp } from "../tests/helpers/renderTestApp";

describe("Navbar", () => {
  test("Navbar redirect to Main Page", () => {
    renderTestApp(<Navbar />);
    const mainlink = screen.getByTestId("main-link");

    userEvent.click(mainlink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("Navbar redirect to About Page", () => {
    renderTestApp(<Navbar />);
    const aboutlink = screen.getByTestId("about-link");

    userEvent.click(aboutlink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("Navbar redirect to Users Page", () => {
    renderTestApp(<Navbar />);
    const userslink = screen.getByTestId("users-link");

    userEvent.click(userslink);

    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
