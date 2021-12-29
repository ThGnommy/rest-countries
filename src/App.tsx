import { useEffect } from "react";
import { getAllCountries } from "./redux/actions/countriesAction";
import { useDispatch } from "react-redux";
import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Details from "./Pages/Details";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/:regionName" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}
