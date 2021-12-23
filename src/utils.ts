export const capitalize = (word: any) => {
  return word.replace(/^(.)|\s+(.)/g, (c: any) => c.toUpperCase());
};
