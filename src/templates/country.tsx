export type Country = {
  name: { common: string };
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  region: string;
  population: number;
  capital: string[] | undefined;
  alpha3Code: string;
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  flags: {
    svg: string;
  };
};

export type World = {
  countries: Country[];
};
