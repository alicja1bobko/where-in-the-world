import Header from "./Header";


const MainApp = (props: any) => {


  return (
    <div>
      <Header />
      <form className="flex justify-between px-7 py-12 sm:flex-row flex-col gap-2">
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            type="search"
            name="country"
            placeholder="Search for a country..."
          />
        </div>
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            type="search"
            name="country"
            placeholder="Search for a country..."
          />
        </div>
      </form>
    </div>
  );
};

export default MainApp;
