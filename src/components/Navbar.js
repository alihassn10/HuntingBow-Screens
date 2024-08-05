import React from 'react'
import Announcements from './Announcements'
import NavbarSearch from './NavbarSearch'
import NavbarNavigation from './NavbarNavigation'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
    <Announcements/>
    <NavbarSearch/>
    <NavbarNavigation/>
    </>
  )
}

export default Navbar