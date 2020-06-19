import React from 'react';
import {Breadcrumb,BreadcrumbItem, FormGroup, Label, Col,  Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import MapContainer from './Mapcontainer';
import 'react-redux-form';
import { LocalForm, Control,Errors } from 'react-redux-form';

const required = (val)=>val && val.length;
const maxlength=(len)=>(val)=> !(val) || (val.length <= len);
const minlength =(len)=>(val)=> val && (val.length >=len);
const isnum=(val)=> !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class  Contact extends React.Component {

    constructor(props){
        super(props);
        
        this.handleSubmit=this.handleSubmit.bind(this);
    
    }
    //adding handelers
   
    handleSubmit(values){
        alert("current inputs are "+ JSON.stringify(values));
        console.log(values);
        

    }
    
    
    
    render(){

        return(
            <div className="container">
                 <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                contact us
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>CONTACT</h3>
                            <hr/>
                        </div>
    
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <MapContainer/>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="//#endregion"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>
                            Send Us Your Feedback
                        </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name : </Label>
                                <Col md={10}>
                                    <Control.text  model=".firstname" id="firstname" name="firstname" placeholder="First Name"
                                     className="form-control"
                                     validators={{
                                         required, maxlength:maxlength(40),minlength:minlength(1)
                                     }}
                                      
                                      />
                                      <Errors
                                      className="text-danger"
                                      model=".firstname"
                                      show="touched"
                                      messages={{
                                          required:'Required',
                                          maxlength:'Length mustbe less than 40',
                                          minlength:'Length must be greater than 1'
                                      }}
                                      />

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name : </Label>
                                <Col md={10}>
                                    <Control.text  model=".lastname" id="lastname" name="lastname" placeholder="Last Name" 
                                    className="form-control"
                                    validators={{
                                        required, maxlength:maxlength(40),minlength:minlength(1)
                                    }}
                                   />
                                    <Errors
                                      className="text-danger"
                                      model=".lastname"
                                      show="touched"
                                      messages={{
                                          required:'Required',
                                          maxlength:'Length mustbe less than 40',
                                          minlength:'Length must be greater than 1'
                                      }}
                                      />
                                  
                                   
                                </Col>
                               
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Phn.no : </Label>
                                <Col md={10}>
                                    <Control.text  model=".telnum" id="telnum" name="telnum" placeholder="Telephone number" 
                                    className="form-control"
                                    validators={{
                                        required, maxlength:10,minlength:minlength(10),isnum
                                    }}
                                    />
                                     <Errors
                                      className="text-danger"
                                      model=".telnum"
                                      show="touched"
                                      messages={{
                                          required:'Required',
                                          
                                          minlength:'Enter a valid phone number !!!     ',
                                          isnum:'only contains numbers'
                                      }}
                                      />
                                  

                           
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email Id : </Label>
                                <Col md={10}>
                                    <Control.text  model=".email" id="email" name="email"
                                     placeholder="Email Id"
                                     className="form-control"
                                     validators={{
                                         validEmail
                                     }}
                                     />
                                     <Errors className="text-danger"
                                      model=".email"
                                      show="touched"
                                      messages={{
                                          validEmail:'enter a valid Email Id !'
                                      }}
                                      />
                                    

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                    <Col md={{size:6,offset:2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox  model=".agree"
                                                className="form-check-input"
                                                name="agree" />{''}
                                                <strong>
                                                    May We Contact You ?
                                                </strong>
                                        
                                            </Label>
                                        </FormGroup>

                                    </Col>
                                    <Col md={{size:3,offset:1}}>
                                        <Control.select  model=".contactType" name="contactType" className="form-control">                                            <option>Tel no.</option>
                                            <option>Email</option>
                                            <option>Telephone</option>
                                        </Control.select>
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your feedback : </Label>
                                <Col md={10}>
                                    <Control.textarea  model=".message" id="message" name="message" placeholder="write something" 
                                     className="form-control"
                                    />
                                   

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10 , offset:2}}>
                                    <Button type="submit" className="btn btn-outline btn-primary" color="primary">
                                        Send Your Feedback

                                    </Button>
                                </Col>
                            </FormGroup>


                            


                        </LocalForm>

                    </div>

                </div>
                <div className="row">
                   
                </div>
            </div>
        );


    }
    
    
    
}

export default Contact;