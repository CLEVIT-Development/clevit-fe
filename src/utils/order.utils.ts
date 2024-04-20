// 1 -> 01
// 11 -> 11
export const orderUtils = (num: number) => {
  return String(num + 1).padStart(2, "0");
};
