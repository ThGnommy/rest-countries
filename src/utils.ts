export const capitalize = (word: any): HTMLInputElement => {
  return word.replace(/^(.)|\s+(.)/g, (c: any) => c.toUpperCase());
};

export const numberWithCommas = (num: Number | string): string => {
  return Number(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
