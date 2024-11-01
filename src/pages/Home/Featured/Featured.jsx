 import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "./Featured.css";
const Featured = () => {
  return (
    <div className="featuredBG text-white py-10">
      <SectionTitle heading={"Check it out"} subHeading={"FROM OUR MENU"} />

      <div className="grid md:grid-cols-2  items-center gap-4 w-10/12 mx-auto mt-8">
        <div>
          <img
            className="w-full inline-block rounded-md"
            src={featuredImg}
            alt="featured image"
          />
        </div>

        <div>
          <h1 className="text-xl">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline my-2 text-white  border-0 border-b-2 border-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
