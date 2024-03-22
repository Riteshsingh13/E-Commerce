import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../datas/mens/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
      </div>
    </div>
  );
};

export default HomePage;
