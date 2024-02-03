import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import GasBoilersPage from "./pages/GasBoilersPage";
import HeatPumpsPage from "./pages/HeatPumpsPage";
import AirConditionersPage from "./pages/AirConditionersPage";
import HeatingPage from "./pages/HeatingPage";
import { Suspense } from "react";

const App = () => {
  return (
  <div className="text-[--main] flex flex-col items-center justify-center h-">
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/heating" element={<HeatingPage />} />
        <Route path="/gas-boilers" element={<GasBoilersPage />} />
        <Route path="/heat-pumps" element={<HeatPumpsPage />} />
        <Route path="/air-conditioners" element={<AirConditionersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </div>
    
  )
}

export default App;
