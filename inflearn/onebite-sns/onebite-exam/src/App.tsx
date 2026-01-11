import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Typography from "./pages/typograpy";
import Border from "./pages/border";
import FlexContainer from "./pages/flexcontainer";
import { Toaster } from "@/components/ui/sonner";
import Shadcn from "./pages/shadcn";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/typograpy" element={<Typography />} />
        <Route path="/border" element={<Border />} />
        <Route path="/flexcontainer" element={<FlexContainer />} />
        <Route path="/shadcn" element={<Shadcn />} />

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
