import Link from "next/link";
import { FC } from "react";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR */}
          <SearchSideBar />
          {/* SEARCH SIDE BAR */}
          <div className="w-5/6">
            {/* RESAURANT CAR */}
            <RestaurantCard />
            {/* RESAURANT CAR */}
          </div>
        </div>
      </main>
    </main>
  );
};

export default page;