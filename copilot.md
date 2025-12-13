# Cursor Agent Instructions (Project: bubble-sort-v5)

## Default development mode: TDD (where practical)
When work is **testable at the unit level** (especially **pure functions**, reducers, calculations, parsing/formatting, state transitions, and dependency-injected logic), prefer **Kent Beck style TDD**:

Use **Red → Green → Refactor**, with an explicit **stop for review** between each step:

1. **Red**: write the **minimal failing test**
2. **Review**: confirm the test is meaningful, minimal, and fails for the right reason
3. **Green**: make the test pass in the **easiest way possible** (even if that means **hard-coding** a return value)
4. **Review**: confirm the test is green for the intended reason and we didn’t over-build
5. **Refactor**: implement the **quality solution** / improve design & clarity while keeping tests green
6. **Review**: confirm behavior is preserved and code is cleaner; keep refactor small and intentional

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
