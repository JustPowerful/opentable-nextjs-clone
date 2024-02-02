import Header from "@/components/Header";
import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <main>
      <Header />
      <div className="py-3 px36 mt-10 flex flex-wrap justify-center ">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-64 h-72 bg-slate-200 m-2 animate-pulse overflow-hidden rounded border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default loading;
