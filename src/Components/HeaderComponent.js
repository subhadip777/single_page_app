import React from 'react';
import { Navbar,NavbarBrand,Nav,NavbarToggler,Jumbotron, NavItem, Collapse, Modal, ModalHeader, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isnavopen:false,
            isloginopen:false

        }
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleLogin=this.toggleLogin.bind(this);
        this.handlelogin=this.handlelogin.bind(this);

    }
    toggleNav(){
        this.setState({isnavopen:!this.state.isnavopen})

    }
    toggleLogin(){
        this.setState({isloginopen: !this.state.isloginopen})

    }
    handlelogin(event){
        this.toggleLogin();
        alert("username :"+ this.username.value +"  password :" + this.password.value+<button>no</button>);

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
                                    <span className="fa fa-home fa-sm"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-sm"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-sm"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-sm"></span>contact Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <button id="navbutton" className="btn btn-outline" onClick={this.toggleLogin} >
                                    <span className="fa fa-sign-in fa-sm">

                                    </span>
                                    Login
                                </button>
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
                <Modal isOpen={this.state.isloginopen} toggle={this.toggleLogin} >
                    <ModalHeader toggle={this.toggleLogin}>LOGIN</ModalHeader>
                    <hr/>
                    <Form onSubmit={this.handlelogin} className="form p-2">
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={(input)=>this.username= input}></Input>

                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="text" id="password" name="password" innerRef={(input)=>this.password= input}></Input>
                            
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input)=>this.checkbox= input}/><span>Remember me</span>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <button type="submit" value="submit" className="btn btn-outline-primary mt-2" >
                                Submit
                            </button>
                        </FormGroup>


                    </Form>
                    

                </Modal>
            </React.Fragment>

        );
    }
};
export default Header;