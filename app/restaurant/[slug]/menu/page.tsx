import { FC } from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* HEADER */}
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menu />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  );
};

export default page;
