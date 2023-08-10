import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout(props) {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
      )
}

export default Layout
