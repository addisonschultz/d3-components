import { Data, Override } from "framer";

// Orange
let A = {
  label: "somethingA",
  values: [
    { x: "SomethingA", y: 10 },
    { x: "SomethingB", y: 4 },
    { x: "SomethingC", y: 3 }
  ]
};

// Light Blue
let B = {
  label: "somethingB",
  values: [
    { x: "SomethingA", y: 6 },
    { x: "SomethingB", y: 8 },
    { x: "SomethingC", y: 5 }
  ]
};

// Blue
let C = {
  label: "somethingC",
  values: [
    { x: "SomethingA", y: 6 },
    { x: "SomethingB", y: 8 },
    { x: "SomethingC", y: 5 }
  ]
};

export const data = Data({
  info: [A, B, C]
});
