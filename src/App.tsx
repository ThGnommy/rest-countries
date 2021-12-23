import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Layout from "./components/Layout";
import Inputs from "./components/Inputs";
import { getAllCountries } from "./redux/actions/countriesAction";
import { useDispatch } from "react-redux";
import CountriesList from "./components/CountriesList";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <Layout>
      <Inputs />
      <CountriesList />
    </Layout>
  );
}
