// Run: node app/nearest-index.test.mjs
import assert from "node:assert/strict";

// Mirrors app/nearest-index.ts — kept inline so the check runs without a build step.
const nearestIndex = (values, target) =>
  values.reduce(
    (best, value, i) =>
      Math.abs(value - target) < Math.abs(values[best] - target) ? i : best,
    0,
  );

// Rail at rest: card 1 sits at the content edge, card 2 one card+gap to the right.
assert.equal(nearestIndex([0, 1174], 0), 0);
// Scrolled to the end: card 2 is 124px from the edge, card 1 is 1050px off-screen left.
assert.equal(nearestIndex([-1050, 124], 0), 1);
// Mid-scroll, card 2 closer to the content edge than card 1.
assert.equal(nearestIndex([-700, 474], 0), 1);
// Mid-scroll, card 1 still closer.
assert.equal(nearestIndex([-300, 874], 0), 0);
// Tie goes to the earlier index.
assert.equal(nearestIndex([-100, 100], 0), 0);
// Three cards, middle one aligned.
assert.equal(nearestIndex([-1174, 0, 1174], 0), 1);

console.log("nearest-index: all assertions passed");
