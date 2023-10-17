import { strictEquals } from "./modules/strictEquals.js";

const table = [
  ["A", "B", "Results"],
  [1, 1, strictEquals(1, 1)],
  [NaN, NaN, strictEquals(NaN, NaN)],
  [0, 0, strictEquals(0, -0)],
  [-0, 0, strictEquals(-0, 0)],
  [1, "1", strictEquals(1, "1")],
  [true, false, strictEquals(true, false)],
  [false, false, strictEquals(false, false)],
  ["water", "oil", strictEquals("water", "oil")],
];

console.table(table);
