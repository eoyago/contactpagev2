import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container.header__container">
        <h5>Olá, meu nome é</h5>
        <h1>Yago Caixeta</h1>
        <h5 className="text-light">DevOps Engineer</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>

        <div className="me"></div>
        <div className="img-container">
          <img src={ME} alt="me" />
        </div>
        
      </div>

      <div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header