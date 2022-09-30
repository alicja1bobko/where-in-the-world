import { Country } from "../templates/country";
import { useEffect, useRef, useState } from "react";
interface Form {
  allCountries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

const Form: React.FC<Form> = ({ allCountries, setFilteredCountries }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [countriesFormSearchState, setCountriesFormSearchState] =
    useState<Country[]>(allCountries);

  useEffect(() => {
    setCountriesFormSearchState(allCountries);
  }, [allCountries]);

  const handleSearch = () => {
    const inputValue = searchInput?.current?.value
      .trim()
      .toLocaleLowerCase() as string;

    const filtered = countriesFormSearchState.filter((country) => {
      return country.name.common.toLocaleLowerCase().startsWith(inputValue);
    });
    // setCountriesFormSearchState(filtered);
    setFilteredCountries(filtered);
  };

  const filterByRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setCountriesFormSearchState(allCountries);
      setFilteredCountries(allCountries);
      return;
    } else if (searchInput?.current?.value.trim()) {
      const filtered = countriesFormSearchState.filter(
        (country) => country.region.toLocaleLowerCase() === e.target.value
      );
      setCountriesFormSearchState(filtered);
      setFilteredCountries(filtered);
    } else {
      const filtered = allCountries.filter(
        (country) => country.region.toLocaleLowerCase() === e.target.value
      );
      setCountriesFormSearchState(filtered);
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <form className="flex justify-between px-[2rem] md:px-[4rem] ] py-12 sm:flex-row flex-col gap-2">
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            className="w-full shadow-md px-3 py-4 rounded-[5px] "
            type="search"
            name="country"
            placeholder="Search for a country..."
            onChange={handleSearch}
            ref={searchInput}
          />
        </div>
        <div className="sm:w-[25%] sm:max-w-[15rem]">
          <select
            className="w-full shadow-md px-3 py-4 rounded-[5px] border-r-[12px] border-r-transparent"
            name="region"
            onChange={filterByRegion}
          >
            <option hidden>Filter by Region</option>
            <option value="all">All</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="antarctic">Antarctic</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
