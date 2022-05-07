import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yago-gon%C3%A7alves-caixeta-9b657916b/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/eoyago/" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials