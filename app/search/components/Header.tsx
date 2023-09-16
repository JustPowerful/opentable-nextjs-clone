import SearchBar from "@/components/SearchBar";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <SearchBar />
    </div>
  );
};

export default Header;
