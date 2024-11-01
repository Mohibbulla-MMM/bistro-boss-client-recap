import "./MenuItem.css";
const MenuItem = ({ item }) => {
  //   console.log(item);
  return (
    <div className="flex gap-1">
      {/* image */}

      <img
        className="menu-item-img inline-block w-28 h-28 object-cover mr-2"
        src={item?.image}
        alt=""
      />

      {/*  */}
      <div className="">
        <h1 className="text-xl text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
          {item?.name} ---
        </h1>
        <p className="text-gray-500">{item?.recipe}</p>
      </div>
      <div>
        <p className="text-yellow-600 text-xl ">${item?.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
