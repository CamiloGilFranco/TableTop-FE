import SearchbarComponent from "../SearchbarComponent/SearchbarComponent";
import { CarrucelComponent } from "../carrusel/CarrucelComponent";
import PromotionBanner from "../4 Promotion Banner/PromotionBanner";
import FlowInfoComponent from "../FlowInfoComponent/FlowInfoComponent";
import PopularRestaurant from "../6 Popular Restaurant/PopularRestaurant";
import DownloadPageComponent from "../DownloadPageComponent/DownloadPageComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Footer from "../Footer/Footer";


const HomePageComponent = () => {
    return(
        <div>
            <HeaderComponent/>
            <SearchbarComponent />
            <CarrucelComponent />
            <PromotionBanner />
            <FlowInfoComponent />
            <PopularRestaurant />
            <DownloadPageComponent />
            <Footer/>
        </div>
    )
}

export default HomePageComponent;