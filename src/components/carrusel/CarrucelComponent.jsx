import './CarrucelComponent.css'
import mexicanFood from "./assets/mexicanfood.jpg";
import italianFood from "./assets/italianfood.jpg";
import chineseFood from "./assets/chinesefood.jpg";


const CarrucelComponent = () =>{

    return(

        <main className='carrucel'>
            <section className="carrucel-list">
                <div className="food-type">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={mexicanFood} alt="mexican" className="food-type__image" ></img>
                    </a>
                    <h3 className='food-type__item>Mexican'>Mexican</h3>
                    <p className='food-type__text'>23 Restaurant</p>
                </div>
                <div className="food-type">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={chineseFood} alt="chinese" className="food-type__image"/>
                    </a>
                    <h3 className='food-type__item'>Chinese</h3>
                    <p className='food-type__text'>23 Restaurant</p>
                </div>
                <div className="food-type">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={italianFood} alt="italian food" className="food-type__image"/>
                    </a>
                    <h3 className='food-type__item'>Italian</h3>
                    <p className='food-type__text'>23 Restaurant</p>
                </div>
                <div className="food-type">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={mexicanFood} alt="chinese food" className="food-type__image"/>
                    </a>
                    <h3 className='food-type__item'>Bakery</h3>
                    <p className='food-type__text'>23 Restaurant</p>
                </div>
                <div className="food-type">
                    <div content-img>
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={mexicanFood} alt="chinese food" className="food-type__image"/>
                    </a>
                    </div>
                    <h3 className='food-type__item'>Bakery</h3>
                    <p className='food-type__text'>23 Restaurant</p>   
                </div>
                <div className="food-type">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer" className='content-img'>
                        <img src={mexicanFood} alt="chinese food" className="food-type__image"/>
                    </a>
                    <h3 className='food-type__item'>Bakery</h3>
                    <p className='food-type__text'>23 Restaurant</p>
                </div>
            </section>
        </main>
  
    )
}

export {CarrucelComponent}