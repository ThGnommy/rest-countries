import React from "react";

export interface CountryProps {
  key: string;
  flags: {
    png: string;
  }
  name: {
    common: string;
  }
  population: number;
  region: string;
  capital: string;
}
