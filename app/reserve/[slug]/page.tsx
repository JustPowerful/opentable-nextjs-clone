import Link from "next/link";
import { FC } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <Header />
            {/* HEADER */} {/* FORM */}
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
};

export default page;
