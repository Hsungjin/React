import { Route, Routes } from "react-router-dom";
import "./App.css";
import RouterPage from "./pages/routerpage";
import Typography from "./pages/typograpy";
import Border from "./pages/border";
import FlexContainer from "./pages/flexcontainer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<RouterPage />} />
        <Route path="/typograpy" element={<Typography />} />
        <Route path="/border" element={<Border />} />
        <Route path="/flexcontainer" element={<FlexContainer />} />
      </Routes>
    </>
  );
}

export default App;
