import { useEffect } from "react";
import Header from "./Header";

const MainApp = (props: any) => {
  useEffect(() => {
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
      <form className="flex justify-between px-7 py-12 sm:flex-row flex-col gap-2">
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            className="w-full shadow-md px-3 py-4 rounded-[5px] "
            type="search"
            name="country"
            placeholder="Search for a country..."
          />
        </div>
        <div className=" sm:w-[45%] sm:max-w-[28rem]">
          <select name="region">
            <option hidden>Filter by Region</option>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default MainApp;
