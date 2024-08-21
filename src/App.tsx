import { useState } from "react";
import "./App.css"
import Dashboard from "./Component/dashboard/dashboard";
import MySkill from "./Component/My Skills/My-Skill";
import MyEducation from "./Component/My Education/My-Education";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import ContactUs from "./Component/ContactUs/ContactUs";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  return (
    <>
      <div className="bg-[#0f0715]">
        <Header />
        <Dashboard />
        <MyEducation />
        <MySkill />
        <ContactUs />
        <Footer />

        {/* <About /> */}

        <Resume />

        {/* <Testimonial /> */}
      </div>
    </>
  );
}

export default App;
