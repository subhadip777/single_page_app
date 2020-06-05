import React from 'react';
import { Navbar,NavbarBrand,Nav,NavbarToggler,Jumbotron, NavItem, Collapse, } from 'reactstrap';
import 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isnavopen:false

        }
        this.toggleNav=this.toggleNav.bind(this);

    }
    toggleNav(){
        this.setState({isnavopen:!this.state.isnavopen})

    }


    render(){
        return(
            //react fragment
            <React.Fragment>
                <Navbar dark expand='md' >
                    <div className="container">
                      <NavbarBrand  className="justify-content-start ">
                          <img src='assets/images/logo.png' height='30' width='41' alt="Single Page Portfolio Maker"/>
                          <strong>
                          Single Page Portfolio Maker
                          </strong>
                      </NavbarBrand>
                      <NavbarToggler onClick={this.toggleNav}/>
                      <Collapse isOpen={this.state.isnavopen} navbar  className="justify-content-end">
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fas fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fas fa-home fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fas fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fas fa-address-card fa-lg"></span>contact Us
                                </NavLink>
                            </NavItem>

                        </Nav>
                     </Collapse>
                    </div>

                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>
                                    Single Page Portfolio Maker
                                </h1>
                                <p>
                                    we use to make portfolios for the upcoming tech guys who want to showcase their tallent to the world's people with the help of a simple website.

                                </p>

                            </div>

                        </div>

                    </div>

                </Jumbotron>
            </React.Fragment>

        );
    }
};
export default Header;