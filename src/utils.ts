export const capitalize = (word: any) => {
  return word.replace(/^(.)|\s+(.)/g, (c: any) => c.toUpperCase());
};

export const numberWithCommas = (num: Number): string => {
  return Number(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
