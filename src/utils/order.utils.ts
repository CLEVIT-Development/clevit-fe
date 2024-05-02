/**
 * examples` 1 -> 01, 11 -> 11
 * @param {number} num
 * @return {string}
 */
export const orderUtils = (num: number): string => {
  return String(num).padStart(2, "0");
};
