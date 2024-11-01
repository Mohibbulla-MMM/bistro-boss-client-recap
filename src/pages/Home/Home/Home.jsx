import React from "react";
import Carosel from "../Carosel/Carosel";
import Category from "../Category/Category";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Carosel />
      <Category />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
