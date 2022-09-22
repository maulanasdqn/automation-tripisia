export const nullSafety = (val: any) =>
  val === undefined || val === null
    ? "Default Data"
    : typeof val === "number"
    ? val.toString() === ""
      ? "2"
      : val.toString()
    : val;
export const imageLoader = (val: any) => `assets/${nullSafety(val)}.jpg`;

export const stupidCheck = (val: any) =>
  val === undefined || val === null ? 0 : parseInt(val);

export const anotherStupidityChecker = (val: any) =>
  val === undefined ? [2] : val.toString().split(".");
