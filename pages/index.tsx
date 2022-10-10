import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeHero from "../Components/Hero/HomeHero";
import Product from "../Components/product/Product";
import About from "../Components/about/index";
import Advertisement from "../Components/common/Advertisment";
import Contact from "../Components/contact/index";
import Extending from "../Components/common/Extending";

const Home: NextPage = () => {
  return (
    <div>
      <HomeHero />
      <Product title={"Top Products"} />
      <About />
      <Advertisement />
      <Contact title={"Reach out!!"} titleid={1} />
      <Extending />
    </div>
  );
};

export default Home;
