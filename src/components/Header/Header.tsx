import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./Header.css";

interface State {
  isOpen: boolean;
}

interface Props {
  title: string;
}

class Header extends React.Component<Props, State> {
  state: Readonly<State> = {
    isOpen: false
  };

  toggle = () => this.setState(() => ({ isOpen: !this.state.isOpen }));

  render() {
    const { title } = this.props;
    return (
      <>
        <div style={{ zIndex: 9 }}>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img
                src={require("../../assets/images/logo.jpg")}
                alt=""
                className="logo"
              />
            </NavbarBrand>
            <div
              className="d-flex header_right_container justify-content-end"
              style={{ flex: 1 }}
            >
              <div className="title">{title}</div>
              <button
                type="button"
                className="navbar-toggler d-flex"
                onClick={this.toggle}
              >
                <img
                  src={require("../../assets/images/nav-toggler.png")}
                  alt=""
                />
              </button>
            </div>
          </Navbar>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="collapedNavBar"
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/components/"
                  className="container-fluid d-flex justify-content-between align-items-center"
                >
                  <img
                    src={require("../../assets/images/left_arrow.png")}
                    alt=""
                  />
                  <span>الصفحة الرئيسية</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  className="container-fluid d-flex justify-content-between align-items-center"
                >
                  <img
                    src={require("../../assets/images/left_arrow.png")}
                    alt=""
                  />
                  <span>عن الجائزة</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/reactstrap/reactstrap"
                  className="container-fluid d-flex justify-content-between align-items-center"
                >
                  <img
                    src={require("../../assets/images/left_arrow.png")}
                    alt=""
                  />
                  <span>لوحة الصدارة</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        {this.state.isOpen && <div className="fullBodyShade" />}
      </>
    );
  }
}

export default Header;
