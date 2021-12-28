import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Layout from "./components/Layout";
import Inputs from "./components/Inputs";
import { getAllCountries } from "./redux/actions/countriesAction";
import { useDispatch } from "react-redux";
import CountriesList from "./components/CountriesList";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:regionName" element={<Details />} />
    </Routes>
  );
}
