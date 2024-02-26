import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import GasBoilersPage from "./pages/GasBoilersPage";
import HeatPumpsPage from "./pages/HeatPumpsPage";
import AirConditionersPage from "./pages/AirConditionersPage";
import HeatingPage from "./pages/HeatingPage";
import { Suspense } from "react";
import ServicePage from "./pages/ServicePage";

const App = () => {
  return (
    // <HelmetProvider>
    <div className="text-[--main] flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/teplo-serbii/" element={<MainPage />} />
          <Route path="/teplo-serbii/service" element={<ServicePage />}></Route>
          <Route path="/teplo-serbii/heating" element={<HeatingPage />} />
          <Route
            path="/teplo-serbii/gas-boilers"
            element={<GasBoilersPage />}
          />
          <Route path="/teplo-serbii/heat-pumps" element={<HeatPumpsPage />} />
          <Route
            path="/teplo-serbii/air-conditioners"
            element={<AirConditionersPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
    // </HelmetProvider>
  );
};

export default App;
