//------------------------------------------------------------------
// IMPORT: TESTY
//------------------------------------------------------------------
import { test, should } from "../server/testy.js";
//------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST
//------------------------------------------------------------------
import { inversionRatioFromValues } from "../js/three-sorting/actions/inversionRatio.js";

test("inversionRatioFromValues() is 0 for sorted ascending", () => {
  const values = Array.from({ length: 10 }, (_, i) => i);
  const ratio = inversionRatioFromValues(values);
  should(ratio).be.exactly(0);
});

test("inversionRatioFromValues() is 1 for reverse-sorted (unique values)", () => {
  const values = Array.from({ length: 10 }, (_, i) => 9 - i);
  const ratio = inversionRatioFromValues(values);
  should(ratio).be.exactly(1);
});

