import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Countries from "./Countries";
import axios from "axios";
import { Country } from "../templates/country";

const countriesDefaultState: Country[] = [];

const MainApp = (props: any) => {
  const PAGES = 24;
  const [pages, setPages] = useState(PAGES);
  const [allCountries, setAllCountries] = useState(countriesDefaultState);
  const [filteredCountries, setFilteredCountries] = useState(
    countriesDefaultState
  );
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const fetchCountries = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setAllCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch(() => setLoadingError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCountries("https://restcountries.com/v3.1/all");
    // detect bottom of page
    window.onscroll = function (e) {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        setPages((prevPagesState) => prevPagesState + PAGES);
      }
    };

    // Show outline only on key down
    document.body.addEventListener("mousedown", () =>
      document.body.classList.add("hide-focus")
    );
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Tab") document.body.classList.remove("hide-focus");
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto_auto_1fr]">
      <Header />
      <Form
        allCountries={allCountries}
        setFilteredCountries={setFilteredCountries}
      />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Countries countries={filteredCountries} pages={pages} />
        )}
      </main>
    </div>
  );
};

export default MainApp;
