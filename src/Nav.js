import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);

  const trasitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    }
    else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', trasitionNavbar);
    return () => window.removeEventListener('scroll', trasitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img
          className='nav_logo'
          src={require("./assets/logo.png")}
          alt='Logo'
        />

        <img
          className='nav_avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Nav