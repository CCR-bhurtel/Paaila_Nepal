import type { NextPage } from "next";

import HomeHero from "../Components/Hero/HomeHero";
import Product from "../Components/product/Product";
import About from "../Components/about/index";
import Advertisement from "../Components/common/Advertisment";
import Contact from "../Components/contact/index";
import Extending from "../Components/common/Extending";
import Announcement from "../Components/common/Announcement";

const Home: NextPage = () => {
  return (
    <div>
      <HomeHero />
      <Product title={"Top Products"} />
      <About />
      <Announcement />

      <Advertisement />
      <Contact title={"Reach out!!"} titleid={1} />
      <Extending />
    </div>
  );
};

export default Home;
