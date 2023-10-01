import { FC } from "react";
import MenuCard from "./MenuCard";
import { Item } from "@prisma/client";

interface MenuProps {
  menu: Item[];
}

const Menu: FC<MenuProps> = ({ menu }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {/* MENU CARD */}
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
            {/* MENU CARD */}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This retaurant does not have a menu</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
