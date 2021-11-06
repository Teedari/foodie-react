import React from 'react'
import './styles/Layout.scss'
const Layout = ({children}) => {
  return (
    <div className='layout'>
      {children}
    </div>
  )
}

export default Layout
