import { useState } from "react";
import "./App.css"
import Dashboard from "./Component/dashboard/dashboard";
import MySkill from "./Component/My Skills/My-Skill";
import MyEducation from "./Component/My Education/My-Education";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";

function App() {
  return (
    <>
      <div className="bg-[#0f0715]">
        <Header />
        <Dashboard />
        <MyEducation />
        <MySkill />
        <Footer />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
