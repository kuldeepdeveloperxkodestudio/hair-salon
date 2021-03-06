import React from 'react'
import './style.scss';
import { Navbar, Nav } from 'react-bootstrap'
import ImagesIcon from '../../../Components/Cells/ImagesIcon'
import { Images } from '../../../Shared/Assets'
import { TwitterOutlined, FacebookOutlined, YoutubeOutlined, SearchOutlined } from '@ant-design/icons'
import { RouteConfig } from '../../../Configure/RouteConfig'
import Router from  '../../../Service/RouterService'

const Header = () => {
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand>
                    <a href=''><ImagesIcon src={Images.Logo} style={{ height: '33px' }} /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=> Router.pushRoute(RouteConfig.LANDING)}>Home</Nav.Link>
                        <Nav.Link onClick={()=> Router.pushRoute(RouteConfig.SERVICES)}>Services</Nav.Link>
                        <Nav.Link onClick={()=> Router.pushRoute(RouteConfig.STYLISTS)}>Stylists</Nav.Link>
                        <Nav.Link onClick={()=> Router.pushRoute(RouteConfig.ABOUT)}>About Us</Nav.Link>
                        <Nav.Link onClick={()=> Router.pushRoute(RouteConfig.CONTACT)}>Contact</Nav.Link>
                    </Nav>
                    <div className='header-right-side ml-auto'>
                        <div className='socialMedia-menu'>
                            <ul>
                                <li><a href="" id="Twitter"><TwitterOutlined /></a></li>
                                <li><a href="" id="Facebook"><FacebookOutlined /></a></li>
                                <li><a href="" id="Youtube"><YoutubeOutlined /></a></li>
                            </ul>
                        </div>
                        <div className='search-icon'>
                            <a href=""><SearchOutlined /></a>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;