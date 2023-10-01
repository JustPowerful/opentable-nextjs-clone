import { FC } from "react";
import Header from "./components/Header";

interface layoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

const layout: FC<layoutProps> = ({ children, params }) => {
  return (
    <main>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>{" "}
    </main>
  );
};

export default layout;
