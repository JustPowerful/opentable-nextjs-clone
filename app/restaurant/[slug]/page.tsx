import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

interface pageProps {}

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });
  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurant(params.slug);
  return (
    <>
      {/* DESCRIPTION PORTION */}
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={restaurant.slug} />
        {/* RESAURANT NAVBAR */}
        {/* TITLE */}
        <Title name={restaurant.name} />
        {/* TITLE */} {/* RATING */}
        <Rating reviews={restaurant.reviews} />
        {/* RATING */} {/* DESCRIPTION */}
        <Description description={restaurant.description} />
        {/* DESCRIPTION */} {/* IMAGES */}
        <Images images={restaurant.images} />
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews reviews={restaurant.reviews} />
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
