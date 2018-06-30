import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">EMS Construction</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*Home Navigation Link*/}
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              {/*Interior Services Navigation Dropdown Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Interior Services
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem tag={Link} to="/design-build-remodeling">
                    Design + Build Remodeling Services
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/kitchen-remodeling">
                    Kitchen Remodeling
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/bathroom-remodeling">
                    Bathroom Remodeling
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/custom-cabinets">
                    Custom Cabinets
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/wood-working">
                    Wood Working
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/painting">
                    Painting
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/room-additions">
                    Room Additions
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/residential-construction">
                    Residential Construction
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/commercial-construction">
                    Commercial Construction
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/general-contractor">
                    General Contractor
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*Exterior Services Navigation Dropdown Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Exterior Services
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem tag={Link} to="/landscaping">
                    Landscaping
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/patio-covers">
                    Patio Covers
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/concrete-hardscapes">
                    Concrete and Hardscapes
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/outdoor-living-spaces">
                    Outdoor Living Spaces
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*About Navigation Link*/}
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              
              {/*Photo Gallery Navigation Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Photo Gallery
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem tag={Link} to="/interior-photo-gallery">
                    Interior Design
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/exterior-photo-gallery">
                    Exterior Design
                  </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              {/*Contact Navigation Link*/}
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}