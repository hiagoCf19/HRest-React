import {
  Icon,
  LucideProps,
  Plus,
  PlusIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Button } from "../ui/button";
import "./card.css";
import { ReactNode } from "react";
interface MenuCardProps {
  icon: ReactNode;
  backgroundImage: string;
  foodName: string;
  price: number;
  description: string;
  foodComposition: string;
  foodServe: number;
}
const MenuCard = ({
  icon,
  backgroundImage,
  foodName,
  price,
  description,
  foodComposition,
  foodServe,
}: MenuCardProps) => {
  return (
    /* From Uiverse.io by ElSombrero2 */
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {icon}

            <strong>{foodName}</strong>

            <span className="px-2 text-sm text-center">{description}</span>
            <Button className="-mt-4" size={"sm"} variant={"link"}>
              Clique ou passe o mouse para ver
            </Button>
          </div>
        </div>

        <div className="front">
          <div
            className="img"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>{" "}
          <div className="front-content">
            <div className="justify-between flex items-center">
              <small className="badge text-zinc-50 text-sm font-bold">
                R$ {price}
              </small>
              <Button size={"icon"} variant={"secondary"}>
                <ShoppingCart color="#FFF" />
              </Button>
            </div>
            <div className="description">
              <div className="flex items-center">
                <div className="title flex flex-col">
                  <p className="title">
                    <strong>{foodName}</strong>
                  </p>
                  <span>{foodComposition}</span>
                </div>
              </div>

              <p className="card-footer">
                30 Mins &nbsp; | &nbsp; Serve {foodServe} pessoa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
