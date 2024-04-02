// import React, { useState } from "react";

// const SearchBar: React.FC = () => {
//   const [query, setQuery] = useState<string>("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     console.log("Search query:", query);
//   };

const SearchBar = () => {
  return (
    <div className="w-full justify-center items-center flex gap-2">
      <button className="flex justify-center items-center w-9 h-9 rounded-full bg-zinc-900">
        <div>!</div>
      </button>
      <div className="w-1/2 m-5 flex items-center bg-zinc-800 px-4 py-2 rounded-3xl">
        <input
          type="text"
          placeholder="Enter your query here"
          className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none"
        />
        <button className="bg-grey-500 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
