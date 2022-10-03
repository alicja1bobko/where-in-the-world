import { useParams } from "react-router-dom";
import { World } from "../templates/country";
import { Link } from "react-router-dom";
import { longArrowLeft } from "react-icons-kit/fa/longArrowLeft";
import { Icon } from "react-icons-kit";

const Details: React.FC<World> = ({ countries }) => {
  //filter country from DB
  let { countryDetails } = useParams();
  const country = countries.filter(
    (country) => country.name.common === countryDetails
  )[0];

  //currencies helper function
  const currencies: Array<string> = [];
  const currenciesObject = Object.keys(country.currencies).map((key) =>
    currencies.push(country.currencies[key].name)
  );
  const languages: Array<string> = [];
  const languagesObject = Object.keys(country.languages).map((key) => {
    languages.push(country.languages[key]);
  });

  return (
    <>
      <article className="grid gap-[5rem] pt-[5rem] px-[2rem] md:px-[4rem]">
        <Link to={`/`}>
          <button className="btn-back px-8 py-2 rounded-sm shadow-xl font-semibold">
            <div className="grid grid-cols-2 gap-2">
              <Icon icon={longArrowLeft} size={25} />
              <p>Back</p>
            </div>
          </button>
        </Link>
        <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 gap-[2rem] mx-auto w-full">
          <img
            className="object-cover w-full h-auto rounded-md shadow-md "
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
          />
          <section className="p-6 lg:py-7">
            <h1 className="text-xl font-extrabold mb-2">
              {country.name.common}
            </h1>
            <ul>
              <li>
                <b>Native Name: </b>
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].common
                }
              </li>
              <li>
                <b>Population:</b> {country.population}
              </li>
              <li>
                <b>Region:</b> {country.region}
              </li>
              <li>
                <b>Subregion:</b> {country.subregion ? country.subregion : "-"}
              </li>
              <li>
                <b>Capital:</b> {country.capital ? country.capital : "-"}
              </li>
              <li>
                <b>Currencies: </b>
                {currencies.join(", ")}
              </li>
              <li>
                <b>Languages: </b>
                {languages.join(", ")}
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default Details;
