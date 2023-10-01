import { FC } from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { PrismaClient } from "@prisma/client";

interface pageProps {
  params: {
    slug: string;
  };
}

const prisma = new PrismaClient();
const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const page: FC<pageProps> = async ({ params }) => {
  const menu = await fetchItems(params.slug);
  return (
    <>
      {/* HEADER */}
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={params.slug} />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menu menu={menu} />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
};

export default page;
