import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SubMenu from './subMenu';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {setSidebar(!sidebar)};

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar container-fluid' data-spy='affix' data-offset-top='197'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={require('./iiit-logo.png')} className='navimg me-auto'/>
          <div className='navdiv ms-auto'>
          <h1 className='navuptxt'>Govt school</h1>
          <br></br>
          <h2 className='navuptxt'>class teacher:</h2>
          <h4 className='navuptxt1'>Mr./Mrs./Ms.:</h4>
          <input className='navuptxt1' type="text" id="#" name="name" value=""></input>
          </div>
        </div>
        <div class="container my-affix-div" data-spy="affix">
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} sidebar={Navbar}>
          <ul className='container nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
            })}
          </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
