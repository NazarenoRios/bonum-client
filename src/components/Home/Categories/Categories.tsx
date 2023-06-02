import './Categories.css'

import disneyImg from '../../../assets/categories/images/viewers-disney.png'
import marvelImg from '../../../assets/categories/images/viewers-marvel.png'
import nationalImg from '../../../assets/categories/images/viewers-national.png'
import pixarImg from '../../../assets/categories/images/viewers-pixar.png'
import starwarsImg from '../../../assets/categories/images/viewers-starwars.png'

import disneyVideo from '../../../assets/categories/videos/disney.mp4'
import marvelVideo from '../../../assets/categories/videos/marvel.mp4'
import nationalVideo from '../../../assets/categories/videos/national-geographic.mp4'
import pixarVideo from '../../../assets/categories/videos/pixar.mp4'
import starwarsVideo from '../../../assets/categories/videos/star-wars.mp4'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>
      <Link to='/disney'>
        <div className='wrap'>
          <img src={disneyImg} alt='' />
          <video loop autoPlay muted>
            <source src={disneyVideo} type='video/mp4' />
          </video>
        </div>
      </Link>

      <Link to='/marvel'>
        <div className='wrap'>
          <img src={marvelImg} alt='' />
          <video loop autoPlay muted>
            <source src={marvelVideo} type='video/mp4' />
          </video>
        </div>
      </Link>

      <Link to='/natgeo'>
        <div className='wrap'>
          <img src={nationalImg} alt='' />
          <video loop autoPlay muted>
            <source src={nationalVideo} type='video/mp4' />
          </video>
        </div>
      </Link>

      <Link to='/pixar'>
        <div className='wrap'>
          <img src={pixarImg} alt='' />
          <video loop autoPlay muted>
            <source src={pixarVideo} type='video/mp4' />
          </video>
        </div>
      </Link>

      <Link to='/starwars'>
        <div className='wrap'>
          <img src={starwarsImg} alt='' />
          <video loop autoPlay muted>
            <source src={starwarsVideo} type='video/mp4' />
          </video>
        </div>
      </Link>
    </div>
  )
}

export default Categories
