import Link from "next/link";
import { FC } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <Header />
          {/* HEADER */} {/* FORM */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default page;
