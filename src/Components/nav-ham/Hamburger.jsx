import React from 'react'
import "./ham.css"

//hamburger icon
const Hamburger = (props) => {
    return (
        <div onClick={()=>props.setShow(!props.show)}>
        <nav role="navigation">
          <div id="menuToggle" className={`${props.show ? '':'active'}`}>
              

          
            
          
            <span></span>
            <span></span>
            <span></span>
            
         
          </div>
        </nav>
        </div>
    )
}

export default Hamburger
