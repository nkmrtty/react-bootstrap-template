import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Master extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to={{pathname: '/'}}>
                  <a href='/'>React Bootstap Template</a>
                </LinkContainer>
              </Navbar.Brand>
            </Navbar.Header>

          <Nav>
            <LinkContainer to={{pathname: '/a'}}>
              <NavItem eventKey={1} href="#">Page A</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Master;
