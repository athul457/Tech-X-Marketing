import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Feature1 from "./pages/Feature1";
import Feature2 from "./pages/Feature2";
import Landing from "./pages/Landing";
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(true);

  useEffect(() => {
    const hideFooters = ["/contact", "/feature1", "/feature2", "/landing"];
    setHideFooter(!hideFooters.includes(location.pathname));
  }, [location]);
  return (
    <div className="bg-gray-950 text-white w-full  m-0 p-0 overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/Feature1" element={<Feature1 />} />
          <Route path="/features/Feature2" element={<Feature2 />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </main>
      {hideFooter && <Footer />}
    </div>
  );
}
