import React from "react";
import { Input } from "./ui/input";

function Header({
  setSearch,
  search,
}: {
  setSearch: (newSearch: string) => void;
  search: string;
}) {
  return (
    <div className="flex flex-col fixed top-0 z-10 w-full items-center sm:flex-row md:flex-row  justify-between bg-[#FBFBFB] p-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <h1 className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold">
        Movie Search
      </h1>
      <div className="w-[100%] md:w-[50%] sm:w-[50%]">
        <Input
          value={search}
          placeholder="Search movies"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
