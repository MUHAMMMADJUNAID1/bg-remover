import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgSlider from "../components/BgSlider";
import CustomerTestimonials from "../components/CustomerTestimonials";
import UploadImg from "../components/UploadImg";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <CustomerTestimonials />
      <UploadImg />
    </div>
  );
};

export default Home;
