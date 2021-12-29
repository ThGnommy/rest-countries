import { motion } from "framer-motion";
import CountriesList from "../components/CountriesList";
import Inputs from "../components/Inputs";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <Inputs />
        <CountriesList />
      </motion.div>
    </Layout>
  );
};

export default Home;
