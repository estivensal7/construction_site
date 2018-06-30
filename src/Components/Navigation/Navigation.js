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
          <NavbarBrand href="/">EMS Construction</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*Home Navigation Link*/}
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {/*Interior Services Navigation Dropdown Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Interior Services
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/design-build-remodeling">
                    Design + Build Remodeling Services
                  </DropdownItem>
                  <DropdownItem href="/kitchen-remodeling">
                    Kitchen Remodeling
                  </DropdownItem>
                  <DropdownItem href="/bathroom-remodeling">
                    Bathroom Remodeling
                  </DropdownItem>
                  <DropdownItem href="/custom-cabinets">
                    Custom Cabinets
                  </DropdownItem>
                  <DropdownItem href="/wood-working">
                    Wood Working
                  </DropdownItem>
                  <DropdownItem href="/painting">
                    Painting
                  </DropdownItem>
                  <DropdownItem href="/room-additions">
                    Room Additions
                  </DropdownItem>
                  <DropdownItem href="/residential-construction">
                    Residential Construction
                  </DropdownItem>
                  <DropdownItem href="/commercial-construction">
                    Commercial Construction
                  </DropdownItem>
                  <DropdownItem href="/general-contractor">
                    General Contractor
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*Exterior Services Navigation Dropdown Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Interior Services
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/landscaping">
                    Landscaping
                  </DropdownItem>
                  <DropdownItem href="/patio-covers">
                    Patio Covers
                  </DropdownItem>
                  <DropdownItem href="/concrete-hardscapes">
                    Concrete and Hardscapes
                  </DropdownItem>
                  <DropdownItem href="/outdoor-living-spaces">
                    Outdoor Living Spaces
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/*About Navigation Link*/}
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              
              {/*Photo Gallery Navigation Link*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Photo Gallery
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/interior-photo-gallery">
                    Interior Design
                  </DropdownItem>
                  <DropdownItem href="/exterior-photo-gallery">
                    Exterior Design
                  </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>

              {/*Contact Navigation Link*/}
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}