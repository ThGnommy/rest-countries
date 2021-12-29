import { useEffect } from "react";
import { getAllCountries } from "./redux/actions/countriesAction";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:regionName" element={<Details />} />
    </Routes>
  );
}
