import React from "react";

export interface CountryProps {
  key: React.Key | null | undefined;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number | string;
  region: string;
  capital: string;
  subregion: string;
  languages: string;
  borders: string[];
}

export interface CountryDetailsProps {
  key: React.Key | null | undefined;
  flag: string;
  name: string;
  population: number | string;
  region: string;
  capital: string;
  subregion: string;
  languages: string;
  borders: string[];
}
