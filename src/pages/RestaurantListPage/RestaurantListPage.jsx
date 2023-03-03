import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import SearchbarComponent from '../../components/SearchbarComponent/SearchbarComponent';
import RestaurantFilterComponent from '../../components/RestaurantFilterComponent/RestaurantFilterComponent'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import './RestaurantListPage.css';

const RestaurantListPage = ()=>{
  return(
    <div className='restaurantList__page'>
      <HeaderComponent/>
      <SearchbarComponent/>
        <div className='restaurantList__flex'>
          <RestaurantFilterComponent/>
          <RestaurantList />
        </div>    
        <Footer />
    </ div>
  )
}

export default RestaurantListPage;