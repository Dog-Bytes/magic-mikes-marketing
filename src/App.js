import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer, AppContainerBackground } from "./styling/globalStyleComponents";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import Bio from "./components/bio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Parallelogram, TriangleGreen, TriangleYellow,} from "./styling/globalStyleComponents";
import {Helmet} from "react-helmet";
import ServicesPage from "./components/servicesPage";


export default function App() {

  useEffect(() => {
    //axios request
  }, [])


  return (
    <AppContainer className="App">
      <Helmet>
      </Helmet>
      <AppContainerBackground>
        <Parallelogram></Parallelogram>
        <TriangleGreen></TriangleGreen>
        <TriangleYellow></TriangleYellow>
      </AppContainerBackground>
      <Header />
      <Routes>
      <Route path="/" element={<IntroPage />} />
      {/* <Route path="/about" element={<Bio />} /> */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

