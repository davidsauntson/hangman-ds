import React from "react";
import { render } from "@testing-library/react";

import RemainingGuesses from "./RemainingGuesses";

describe("RemainingGuesses component", () => {
  test("renders", () => {
    const { getByTestId } = render(<RemainingGuesses />);
    expect(getByTestId("remaining-guesses")).toBeTruthy();
  });

  test("shows correct number of remaining guesses", () => {
    const remainingGuessCount = 4;
    const { getByText } = render(
      <RemainingGuesses remainingBadGuesses={remainingGuessCount} />
    );
    expect(getByText(remainingGuessCount.toString())).toBeTruthy();
  });
});
