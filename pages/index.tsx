import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeHero from "../Components/Hero/HomeHero";
import Product from "../Components/product/Product";
import About from "../Components/about/index";
import Advertisement from "../Components/common/Advertisment";

const Home: NextPage = () => {
  return (
    <div>
      <HomeHero />
      <Product />
      <About />
      <Advertisement />
    </div>
  );
};

export default Home;
