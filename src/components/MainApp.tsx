import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Countries from "./Countries";
import axios from "axios";

const MainApp = (props: any) => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
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
    console.log(allCountries);
    // Show outline only on key down
    document.body.addEventListener("mousedown", () =>
      document.body.classList.add("hide-focus")
    );
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Tab") document.body.classList.remove("hide-focus");
    });
  }, []);

  return (
    <div>
      <Header />
      <Form />
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Countries countries={filteredCountries} />
        )}
      </main>
    </div>
  );
};

export default MainApp;
