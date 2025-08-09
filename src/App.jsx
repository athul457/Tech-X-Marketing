import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Feature1 from "./pages/Feature1";
import Feature2 from "./pages/Feature2";
import Feature3 from "./pages/Feature3";
import Feature4 from "./pages/Feature4";
import Pricing from "./pages/Pricing";
import TopFooter from "./components/TopFooter";
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(true);

  useEffect(() => {
    const hideFooters = [
      "/contact",
      "/features",
      "/features/feature-1",
      "/features/feature-2",
      "/features/feature-3",
      "/features/feature-4",
      "/pricing",
    ];
    setHideFooter(!hideFooters.includes(location.pathname));
  }, [location]);
  return (
    <div className="bg-gray-950 text-white w-full  m-0 p-0 overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/feature-1" element={<Feature1 />} />
          <Route path="/features/feature-2" element={<Feature2 />} />
          <Route path="/features/feature-3" element={<Feature3 />} />
          <Route path="/features/feature-4" element={<Feature4 />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      {hideFooter && <TopFooter />}
      {hideFooter && <Footer />}
    </div>
  );
}
