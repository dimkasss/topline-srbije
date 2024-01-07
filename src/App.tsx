import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MockPage from "./pages/MockPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
  <div className="text-[--main]">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mock" element={<MockPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
    
  )
}

export default App;
