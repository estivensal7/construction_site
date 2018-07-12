import React from 'react';
import {
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Card,
    CardImg, 
    Button, 
    CardTitle, 
    CardText, 
    Row, 
    Col  } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class InteriorSideNav extends React.Component {

  render() {
    return (
        <Nav vertical>
            <NavItem>
                <NavLink
                    tag={Link} to="/design-build-remodeling"
                >
                    Design & Build Remodeling
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/kitchen-remodeling"
                >
                    Kitchen Remodeling
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/bathroom-remodeling"
                >
                    Bathroom Remodeling
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/custom-cabinets"
                >
                    Custom Cabinets
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/wood-working"
                >
                    Wood Working
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/painting"
                >
                    Painting
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/room-additions"
                >
                    Room Additions
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/residential-construction"
                >
                Residential Construction
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/commercial-construction"
                >
                Commercial Construction
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/general-contractor"
                >
                General Contractor
                </NavLink>
            </NavItem>
        </Nav> 
    );
  }
}