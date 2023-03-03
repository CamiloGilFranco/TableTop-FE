import './RestaurantFilterComponent.css'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import FilterMobile from '../FilterMobile/FilterMobile';

const RestaurantFilterComponent =()=>{

  const [mobileFilter, setMobileFilter] = useState('mobileFilter__none');

  const handleListClick = () => {
    mobileFilter=== 'mobileFilter__none'? setMobileFilter('') : setMobileFilter('mobileFilter__none')
    console.log('click');
  }

  return(
    <section className='restaurantFilter__container'>
      <section className='restaurantFilterMobile'>
        <select className='restaurantFilter__dropdown'>
          <option disabled>Filter</option>
          <option>All</option>
          <option>Popular</option>
          <option>Latest</option>
          <option>Trend</option>
        </select>
        <section className='restaurantFilter__filter'>
          <p>Latest Filter</p>
          <BsFillFilterSquareFill onClick={handleListClick}/>
        </section>
      </section>
      <FilterMobile 
        setMobileFilter={setMobileFilter}
        mobileFilter={mobileFilter}
      />
    </section>
  )
}

export default RestaurantFilterComponent;