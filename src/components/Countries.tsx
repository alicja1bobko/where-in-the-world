import React from "react";
import { Country, World } from "../templates/country";

const Countries: React.FC<World> = ({ countries }) => {
  const cards = countries.map((country, index) => (
    <div
      tabIndex={0}
      className=" card grid rounded-md shadow-md max-w-sm mx-auto w-full max-h-[25rem] overflow-hidden cursor-pointer transition hover:!scale-105 appear transition-all"
      key={country.name.common + index}
    >
      <img
        className="object-cover w-full h-full max-h-[12rem]"
        src={country.flags.svg}
        alt=""
      />
      <article className="p-6">
        <h2 className="text-xl font-extrabold mb-2">{country.name.common}</h2>
        <ul>
          <li>
            <b>Population:</b> {country.population}
          </li>
          <li>
            <b>Region:</b> {country.region}
          </li>
          <li>
            <b>Capital:</b> {country.capital}
          </li>
        </ul>
      </article>
    </div>
  ));

  console.log(cards);

  return (
    <>
      <div className="cards grid gap-14 sm:px-16 ">{cards}</div>
    </>
  );
};

export default Countries;
