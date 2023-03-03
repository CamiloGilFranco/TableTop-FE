import './DownloadPageComponent.css'
import picture from './assets/picture.jpg'
import { BsApple } from 'react-icons/bs'
import { DiAndroid } from 'react-icons/di'

const DownloadPageComponent = () => {
  return(
    <article className='downloadPage__Container'>
      <section className='downloadPage__buttonsContainer'>
        <h3 className='downloadPage__title'>The best food App</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <h4 className='downloadPage__title'>Download App Now...</h4>
        <section className='downloadPage__buttons'>
          <button className='downloadPage__iOS'>
            <BsApple className='downloadPage__icons'/>
            <span>App Store</span>
          </button>
          <button className='downloadPage__android'>
            <DiAndroid className='downloadPage__icons'/>
            <span>Play Store</span>
          </button>
        </section>
      </section>
      <picture>
        <img
          src={picture} 
          alt='whatev'
          className='downloadPage__picture'
        />
      </picture>
    </article>
    )
}

export default DownloadPageComponent;