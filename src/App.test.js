import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("hangman")).toBeTruthy();
  });
});
