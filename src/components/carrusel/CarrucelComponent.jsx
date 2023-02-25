import './CarrucelComponent.css'
import mexicanFood from "./assets/mexicanfood.jpg";
import italianFood from "./assets/italianfood.jpg";
import chineseFood from "./assets/chinesefood.jpg";


function CarrucelComponent(){

    return(

        <main className='container'>
            <section className="content">
                <div className="content-info">
                    <img src={mexicanFood} alt="mexican" className="content-ingo__image" ></img>
                    <h3>Mexican</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <img src={chineseFood} alt="chinese"/>
                    <h3>Chinese</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <img src={italianFood} alt="italian food"/>
                    <h3>Italian</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <img src={mexicanFood} alt="chinese food" />
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>
                </div>
                <div className="content-info">
                    <div content-img>
                        <img src={mexicanFood} alt="chinese food"/>
                    </div>
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>
                    
                </div>
                <div className="content-info">
                    <img src={mexicanFood} alt="chinese food" className="content-ingo__image"/>
                    <h3>Bakery</h3>
                    <p>23 Restaurant</p>
                </div>

            </section>
        </main>
  
    )
}

export {CarrucelComponent}