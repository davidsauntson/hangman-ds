import React from "react";
import { render } from "@testing-library/react";

import Result from "./Result";

describe("Result component", () => {
  test("renders", () => {
    const { getByTestId } = render(<Result />);
    expect(getByTestId("result")).toBeTruthy();
  });

  test("shows win message when game is won", () => {
    const { getByText } = render(<Result hasWon={true} />);
    expect(getByText("Congratulations!")).toBeTruthy();
  });

  test("shows loss message when game is lost", () => {
    const { getByText } = render(<Result hasWon={false} />);
    expect(getByText("Wa waaaaa :-(")).toBeTruthy();
  });

  test("shows play again button", () => {
    const { getByText } = render(<Result />);
    expect(getByText("Play again")).toBeTruthy();
  });
});
