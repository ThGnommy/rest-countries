const base_url = "https://restcountries.com/v3.1/";

export const all_countries = `${base_url}all`;

export const filtered_regions = `${base_url}all?fields=name,capital,flags,population,region,subregion,currencies,languages,borders,tld`;

export const get_country = (name: string) => {
  return `${base_url}name/${name}?fullText=true&fields=name,capital,flags,population,region,subregion,currencies,languages,borders,tld`;
};
