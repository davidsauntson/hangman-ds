# Hangman

A small game made using `create-react-app` for the Citzens Advice technical test.

## Planning

### High quality visualisation

![game visualisation](/docs/vis.jpg)

### Component List

- Title component
- Board component
  - Gallows component
  - CorrectGuesses component
  - IncorrectGuesses component
  - RemainingGuesses component
  - PotentialGuesses component
  - Result component

Potential to create a `LetterComponent` and use composition to make the correct, incoorect and potential guesses components

### Gallows image

Gallows image will be an SVG made of different paths, one for each element to be drawn. Gallows will use `guessesRemaining` somehow to determine which svg path elements to render.

### State

Board component will own the following state and pass down data and methods via props into its child components as required.

```json
{
  "word": "hangman",
  "correctGuesses": ["h", "g"],
  "incorrectGuesses": ["x", "y", "z"],
  "guessesRemaining": 10,
  "hasWon": false
}
```

### Tests

Use react testing library and jest to perform the following tests:

- BoardComponent
  - renders
  - handles potential guess button click with correct arguments
  - displays results instead of letters when game over
- GallowsComponent
  - renders
  - shows correct elements given number of remaining guesses
- CorrectGuessesComponent
  - renders
  - shows correct number of blank spaces
  - shows letters in correct place when guessed
- IncorrectGuessesComponent
  - renders
  - shows all incorrectly guessed letters
- RemainingGuessesComponent
  - renders
  - shows correct number of remaining guesses
- PotentialGuessesComponent
  - renders
  - shows one button for each letter of the alphabet
  - disables buttons for letters that have already been guesses
- ResultComponents
  - renders
  - shows 'win' message when the game is won
  - shows 'lose' message when the game is lost
  - shows 'play again' message when game is won or lost
