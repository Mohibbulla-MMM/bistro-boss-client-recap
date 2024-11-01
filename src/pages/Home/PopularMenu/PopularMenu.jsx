import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohibbulla-MMM/bistro-boss-client-recap/refs/heads/main/public/menu.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const items = data.slice(0, 10);
        setMenu(items);
      })
      .catch((err) => {
        console.log("menu data facth err", err);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"ORDER ONLINE"}
      />

      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 p-4">
        {menu && menu?.map((item) => <MenuItem key={item?._id} item={item} />)}
      </div>
    </div>
  );
};

export default PopularMenu;
