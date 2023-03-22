import './DownloadPageComponent.css'
import picture from './assets/picture.jpg'
import { BsApple } from 'react-icons/bs'
import { DiAndroid } from 'react-icons/di'
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';

const DownloadPageComponent = () => {
  const language = useSelector(state=> state.languageReducer);

  const downloadPageTitle = () => {
    switch (language) {
      case 'en':
        return en.downloadPageTitle
      case 'es':
        return es.downloadPageTitle
      default:
        return en.downloadPageTitle
    }
  }
  const downloadPageCTA = () => {
    switch (language) {
      case 'en':
        return en.downloadPageCTA
      case 'es':
        return es.downloadPageCTA
      default:
        return en.downloadPageCTA
    }
  }

  return(
    <article className='downloadPage__Container'>
      <section className='downloadPage__buttonsContainer'>
        <h3 className='downloadPage__title'>{downloadPageTitle()}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <h4 className='downloadPage__title'>{downloadPageCTA()}</h4>
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