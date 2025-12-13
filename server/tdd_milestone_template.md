# TDD Milestone Template (Plan-first)

Use this template when a change implies a **new function / new behavior**.

## Milestone: Red (write a failing test)
- Add the **minimal failing** Testy spec(s) under `testies/*.testy.js`
- Run `npm run testy` and confirm it **fails for the right reason**
- Stop for **Review**
  - Is the test minimal?
  - Does it fail for the intended reason?
  - Does it describe the behavior clearly?

## Milestone: Green (easiest possible pass)
- Make the test pass in the **easiest way possible**
  - Hard-coding is allowed
  - Keep implementation intentionally minimal
- Run `npm run testy` and confirm **green**
- Stop for **Review**
  - Did we over-build?
  - Is the green path understandable?

## Milestone: Refactor (quality solution)
- Improve design/clarity and implement the **quality solution**
- Keep tests green throughout
- Run `npm run testy` and confirm **still green**
- Stop for **Review**
  - Is the code simpler/cleaner?
  - Did behavior remain unchanged?


