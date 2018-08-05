import React from 'react';
import { 
    Nav, 
    NavItem, 
    NavLink, 
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ExteriorSideNav extends React.Component {

    // rendering Exterior Side Nav
    render() {
    return (
        <Nav vertical>
            <NavItem>
                {/* preparing Navigation Links to render components based on path */}
                <NavLink
                    tag={Link} to="/landscaping"
                >
                    Landscaping
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/patio-covers"
                >
                    Patio Covers
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/concrete-hardscapes"
                >
                    Concrete & Hardscapes
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={Link} to="/outdoor-living-spaces"
                >
                    Outdoor Living Spaces
                </NavLink>
            </NavItem>
        </Nav> 
    );
    }
}