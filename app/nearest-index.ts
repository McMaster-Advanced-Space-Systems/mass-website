/** Index of the value closest to `target`. Ties go to the earlier index. */
export function nearestIndex(values: number[], target: number) {
  return values.reduce(
    (best, value, i) =>
      Math.abs(value - target) < Math.abs(values[best] - target) ? i : best,
    0,
  );
}
