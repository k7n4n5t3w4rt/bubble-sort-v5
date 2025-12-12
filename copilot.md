# Cursor Agent Instructions (Project: bubble-sort-v5)

## Default development mode: TDD (where practical)
When work is **testable at the unit level** (especially **pure functions**, reducers, calculations, parsing/formatting, state transitions, and dependency-injected logic), prefer **Kent Beck style TDD**:

1. **Red**: propose/write the **minimal failing test**
2. **Green**: write the **minimum code** to pass
3. **Refactor**: improve clarity/duplication once green

Use the **Absolute Priority Premise**: always choose the most important failing test you can make pass next.

## Important interaction rule (new functions)
When the user asks for a **new function** (or to add behavior that implies a new function), you MUST ask:

> **“Test first?”**

Then:
- If the user says **yes** (or doesn’t express a preference), proceed with a **minimal failing test** first (when practical).
- If the user says **no**, proceed with implementation, but still suggest a lightweight verification step (quick unit test, Cypress check, or manual steps).

If it’s clearly not practical to test first (see next section), explain why briefly and propose the next best safety net.

## When TDD may be impractical (ok to skip/relax)
For changes that are hard to unit-test cheaply (e.g. **Three.js rendering**, animation timing, layout/CSS-only tweaks, vendor integration quirks), do not force unit tests. Instead, prefer:

- **Small isolated seams**: refactor to pure functions / dependency injection **if feasible**
- **Fast checks**: quick runtime smoke check + a short “how to verify” list
- **Cypress e2e**: when behavior is user-visible and stable to assert

## Testing tools in this repo (use what’s already here)
- **Unit-ish runner**: `npm run testy`
- **E2E**: `npm run cypress:run` (or `npm run cypress:open` for interactive)
- **Full test**: `npm test` (runs both)

## Output expectations
- Keep tests **minimal and intention-revealing**.
- Don’t over-mock; prefer pure functions and DI to make code testable.
- After green, propose small refactors with clear value; don’t churn.
