import { LayoutPage } from "./LayoutPage/LayoutPage";
import { RestaurantTabs } from "../components";

export const RestaurantePage = () => {
  return (
    <LayoutPage>
      <div>
        <RestaurantTabs />
      </div>
    </LayoutPage>
  );
};
