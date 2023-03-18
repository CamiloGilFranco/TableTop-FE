import SearchbarComponent from "../../components/SearchbarComponent/SearchbarComponent";
import { CarrucelComponent } from "../../components/carrusel/CarrucelComponent";
import FlowInfoComponent from "../../components/FlowInfoComponent/FlowInfoComponent";
import PopularRestaurant from "../../components/6 Popular Restaurant/PopularRestaurant";
import DownloadPageComponent from "../../components/DownloadPageComponent/DownloadPageComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const HomePageComponent = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <HeaderComponent />
      <SearchbarComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <CarrucelComponent />
      <FlowInfoComponent />
      <PopularRestaurant inputValue={inputValue}/>
      <DownloadPageComponent />
      <Footer />
    </>
  );
};

export default HomePageComponent;
