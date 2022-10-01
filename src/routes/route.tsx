import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/Landing";
import SelectPage from "../pages/Select";
import ResultPage from "../pages/Result";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<SelectPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
