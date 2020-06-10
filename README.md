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

## Accessibility Features

- skip links
- button and other interactive elements used where appropriate
- hidden svg with `aria-hidden`
- used `aria-label` to provide prompts to screen readers
- have made it relatively playable using just a keyboard and a screen reader (although this is hard to be objective about since I know what the layout is)
- contrast ratios are WCAG 2 AA
- used `pa11y` for to test accessibilty

## Development Decisions

| Decision                                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| used `create-react-app`                    | quick setup, includes testing frameworks (`jest` and `react-testing-library`), includes `react-a11y` for accessiblity prompts                                                                                                                                                                                                                                                                                                                                                                                    |
| did not use `redux` / state management lib | not really necessary for an app of this size and complexity. I do love using `redux`, especially with `redux-orm` and would introduce it if there were more features eg a two player variant                                                                                                                                                                                                                                                                                                                     |
| SCSS / BEM                                 | I have used SCSS and BEM as my default styling approach or a long time. In react apps I tend to reserve css in jsx files for when UI depends directly on state. I think with this app there would be some interesting options to use composition for the letters in the keyboard / hidden word / incorrect guesses areas and style them inline but it didn't really seem necessary for an app of this size                                                                                                       |
| use of `jest` and `RTL`                    | I like the user centric approach that `react-testing-library` encourages although it does blur the lines between unit and integration testing. Overall I think it is less brittle than, for example, interrogating the state of a component in a test as it discourages testing implementation details. As with all things there are times when it isn't as useful, eg when designs don't allow you to render out data to grab on to with a test.                                                                |
| TDD                                        | It does take a bit longer but I like that it encourages a developer to sit down and plan, rather than dive straight in. I do sometimes find that I need to change a test when actually implementing a component - eg with the `Board` component I added some props that then caused the tests to fail.                                                                                                                                                                                                           |
| Hooks                                      | The big one! I am still undecided on hooks, having not used them in anger yet. I wanted to demonstrate that I could use them - perhaps this isn't a good enough reason :-/. With a history of back-end development, I didn't really have a massive problem with understanding classes and `this` scoping (although it is a bit bonkers in JS). To me closures, especially when mixed with the asynchronicity of `useState` are harder to debug and understand than classes and the component life-cycle methods. |

## Areas for improvement

- refactor game logic into a seperate module, this would make testing easier and make the component easier to read / maintain
- more tests, better testing of business logic
- hooks - are closures easier to understand and debug than classes? IMHO, nah. I do like how easy it is to create a slice of state with `useState` though.
- repo branching - I would normally employ the feature-flow but it seemed a bit much for a small test app without CI/CD and any other developer.
