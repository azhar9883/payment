import React from 'react'
import './navbar.css'
import logo from './images/LOGO.png'

const Navbar = () => {
  return (
    <div>
    <>
    {/* Hello world */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container ">
         <img src={logo} alt='img' width='10%'></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item me-5">
            <select className='border-0 '>
            <option value="rigatoni">coureses</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
            </li>
            <li className="nav-item me-4">
            <select className='border-0 '>
            <option value="rigatoni">coureses</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
            </li>
          </ul>
            <div className='d-flex bd-highlight '>
             <div className='mt-2  me-5 flex-fill bd-highlight'>
             <i className='fa fa-search me-1'></i>
             </div>
             <div className='mt-2 me-5 flex-fill bd-highlight'>
              <p className='log'>Log in</p>
             </div>
             <div className='  flex-fill bd-highlight'>
             <button className=" mt-1 btn bg-primary px-5 text-white rounded-5 jon" type="submit">
             JOIN NOW
           </button>
             </div>
            
            </div>
        
           
            
           
          
        </div>
      </div>
    </nav>
  </>
  
    </div>
  )
}

export default Navbar
