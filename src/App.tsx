import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DrawInst from './pages/draw-inst/DrawInst';
import HomePage from './pages/home-page/HomePage';
import InstitutePage from "./pages/InstitutePage/InstitutePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/drawinst' element={<DrawInst />} />
          <Route path="insitute/:instName/:instFloor" element={<InstitutePage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"not-found"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
