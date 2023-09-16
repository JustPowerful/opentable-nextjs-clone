"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
