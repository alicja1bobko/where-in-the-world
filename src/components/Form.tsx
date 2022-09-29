const Form = () => {
  return (
    <>
      <form className="flex justify-between px-7 py-12 sm:flex-row flex-col gap-2">
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            className="w-full shadow-md px-3 py-4 rounded-[5px] "
            type="search"
            name="country"
            placeholder="Search for a country..."
          />
        </div>
        <div className="sm:w-[25%] sm:max-w-[15rem]">
          <select
            className="w-full shadow-md px-3 py-4 rounded-[5px] border-r-[12px] border-r-transparent"
            name="region"
          >
            <option hidden>Filter by Region</option>
            <option value="all">All</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;
