import SearchbarComponent from "../SearchbarComponent/SearchbarComponent";
import { CarrucelComponent } from "../carrusel/CarrucelComponent";
import PromotionBanner from "../4 Promotion Banner/PromotionBanner";
import FlowInfoComponent from "../FlowInfoComponent/FlowInfoComponent";
import PopularRestaurant from "../6 Popular Restaurant/PopularRestaurant";
import DownloadPageComponent from "../DownloadPageComponent/DownloadPageComponent";


const HomePageComponent = () => {
    return(
        <div>
            <SearchbarComponent />
            <CarrucelComponent />
            <PromotionBanner />
            <FlowInfoComponent />
            <PopularRestaurant />
            <DownloadPageComponent />
        </div>
    )
}

export default HomePageComponent;