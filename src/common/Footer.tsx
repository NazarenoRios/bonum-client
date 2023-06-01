import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'

function Footer() {
  return (
    <PFooter className='p-4 bg-[transparent] rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <div className='text-sm text-gray-500 sm:text-center dark:text-gray-400 space-x-7'>
        <a
          href='https://api.WhatsApp.com/send?phone=2216567792'
          target='_blank'
          rel='noreferrer'
          className='hover:text-white'
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a href='mailto:nazarenolrios@gmail.com' target='_blank' rel='noreferrer'>
          {' '}
          <FontAwesomeIcon icon={faGoogle} />
        </a>

        <a
          href='https://github.com/NazarenoRios'
          target='_blank'
          rel='noreferrer'
          className='hover:text-white'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href='https://www.linkedin.com/in/nazareno-rios/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-white'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </PFooter>
  )
}

const PFooter = styled.footer`
  float: left;
  margin-left: 50px;

  @media screen and (max-width: 582px) {
    margin-left: 200px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 450px) {
    margin-left: 130px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export default Footer
