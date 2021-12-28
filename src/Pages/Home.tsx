import React from "react";
import CountriesList from "../components/CountriesList";
import Inputs from "../components/Inputs";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Inputs />
      <CountriesList />
    </Layout>
  );
};

export default Home;
