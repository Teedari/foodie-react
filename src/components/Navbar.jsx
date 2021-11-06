import React from 'react'
import './styles/Navbar.scss'
import Logo from './Logo'
import { SearchOutlined, SendOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

const Navbar = () => {
  const [showSidebar, setSidebarShow] = useState(false)

  let navbarClasses = 'food-navbar d-flex flex-column justify-content-between';


  const Humberger = ({onClick}) => {
    return (
      <div className='food-navbar__humberger'>
        {showSidebar ? <CloseOutlined  onClick={onClick}/>: <MenuOutlined  onClick={onClick}/>}
      </div>
    )
  }
  return (
    <>
    <Humberger onClick={() => setSidebarShow(!showSidebar)} />
    <div className={ showSidebar ? navbarClasses + ' active'  : navbarClasses}>
     
      <Logo/>
      <ul className='food-navbar__links d-flex flex-column gap-4'>
        <li className='active'><a href="index.html" >Home</a></li>
        <li><a href="index.html" >Menu</a></li>
        <li><a href="index.html" >Services</a></li>
        <li><a href="index.html" >Products</a></li>
        <li><a href="index.html" >Contact</a></li>
      </ul>
      <div className='food-navbar__search d-flex align-items-center gap-2'>
        <div className='icon'><SearchOutlined /></div>
          <input className='form-control' placeholder='search' />
       
        <div className='icon divider'><SendOutlined /></div>
      </div>
    </div>
    </>
  )
}


export default Navbar


