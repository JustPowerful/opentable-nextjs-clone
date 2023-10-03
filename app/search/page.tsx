// import Link from "next/link";
import { FC } from "react";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

interface pageProps {
  searchParams: {
    city?: string;
    cuisine?: string;
    price?: PRICE;
  };
}

const prisma = new PrismaClient();

const fetchRestaurants = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) {
    return await prisma.restaurant.findMany({ select });
  }

  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
          mode: "insensitive",
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  const locations = await prisma.location.findMany();
  return locations;
};

const fetchCuisines = async () => {
  const cuisines = await prisma.cuisine.findMany();
  return cuisines;
};

const page: FC<pageProps> = async ({ searchParams }) => {
  const restaurants = await fetchRestaurants(searchParams.city);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CAR */}
          {restaurants.length > 0 ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>
              Sorry we couldn't find any restaurant according to this location.
            </p>
          )}
          {/* RESAURANT CAR */}
        </div>
      </div>
    </>
  );
};

export default page;
