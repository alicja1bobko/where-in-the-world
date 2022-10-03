import React from "react";
import { Country } from "../templates/country";
import Countries from "./Countries";
import Form from "./Form";

export type FormProps = {
  allCountries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};
export type CountriesProps = {
  countries: Country[];
  pages: number;
};

type Home = FormProps & CountriesProps;

const Home: React.FC<Home> = ({
  allCountries,
  setFilteredCountries,
  countries,
  pages,
}) => {
  return (
    <>
      <Form
        allCountries={allCountries}
        setFilteredCountries={setFilteredCountries}
      />
      <Countries countries={countries} pages={pages} />
    </>
  );
};

export default Home;
