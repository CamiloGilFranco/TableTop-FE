import './CarrucelComponent.css'
import mexicanFood from "./assets/mexicanfood.jpg";
import italianFood from "./assets/italianfood.jpg";
import chineseFood from "./assets/chinesefood.jpg";


const CarrucelComponent = () =>{

    return(

        <main className='container'>
            <section className="content">
                <div className="content-info">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={mexicanFood} alt="mexican" className="content-ingo__image" ></img>
                    </a>
                    <h3>Mexican</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={chineseFood} alt="chinese"/>
                    </a>
                    <h3>Chinese</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={italianFood} alt="italian food"/>
                    </a>
                    <h3>Italian</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={mexicanFood} alt="chinese food" />
                    </a>
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <div content-img>
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={mexicanFood} alt="chinese food"/>
                    </a>
                    </div>
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>   
                </div>
                <div className="content-info">
                    <a href='https://www.pexels.com/es-es/' target='_blank' rel="noreferrer">
                        <img src={mexicanFood} alt="chinese food" className="content-ingo__image"/>
                    </a>
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>
                </div>

            </section>
        </main>
  
    )
}

export {CarrucelComponent}