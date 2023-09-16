import { FC } from "react";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* HEADER */}
      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */}
        {/* TITLE */}
        <Title />
        {/* TITLE */} {/* RATING */}
        <Rating />
        {/* RATING */} {/* DESCRIPTION */}
        <Description />
        {/* DESCRIPTION */} {/* IMAGES */}
        <Images />
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews />
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
      {/* RESERVATION
    CARD PORTION */}
    </>
  );
};

export default page;
