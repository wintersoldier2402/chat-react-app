import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './navbar.scss'
import Users from './users.svg'
import Message from './message.svg'
import Video from './video.svg'
import Help from './help.svg'
import Bell from './bell.svg'
import Italk from './italk.png'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle1 = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src={""} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            
              <NavLink href="/components/"><img src={Users} /> Groups</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/messages/"><img src={Message} /> Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/video calls/"><img src={Video} /> Video Calls</NavLink>
            </NavItem>
            
          </Nav>
          <NavLink href="/support/"><img src={Help} /></NavLink>
          <NavLink href="/notifications/"><img src={Bell} /></NavLink>
          <Dropdown  isOpen={dropdownOpen} toggle={toggle1}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;