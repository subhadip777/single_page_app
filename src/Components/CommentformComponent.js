import React from 'react';
import 'reactstrap';
import { Form, FormGroup, Label, Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import { Control, Errors } from 'react-redux-form';





const required = (val)=>val && val.length;
const maxlength=(len)=>(val)=> !(val) || (val.length <= len);
const minlength =(len)=>(val)=> val && (val.length >=len);

class Commentform extends React.Component{
   

    render(){
        return(

            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} id="commentmodal">
                <Form className="p-2 ">
                    <ModalHeader toggle={this.props.toggle}>
                        <strong className="p-10">
                            COMMENT
                        </strong> 
                    
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup >
                            <label htmlFor="rating" className="">Rating :</label>
                            <Control.select model=".select" id="rating" className=" form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
    
                            </Control.select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Name :</Label>
                                <Control.text model=".name"  id="name" name="name" className=" form-control"
                                    validators={{
                                        required,maxlength:maxlength(15),minlength:minlength(3)
                                    }}
                                    />
                                    <Errors
                                    model=".name"
                                 
                                                                       
                                    messages={{
                                        required:'Name is required',
                                        maxlength:'Name must be lesser than 15 charecters',
                                        minlength:'Name must be greater than 2 charecters'
                                    }}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comment">Comment :</Label>
                            <Control.textarea model=".comment" className="form-control" id="comment" name="comment"/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <FormGroup>
                            <Button type="submit" className="btn btn-primary btn-info">
                                Submit
    
                            </Button>
                        </FormGroup>
                    </ModalFooter>
                    
                    
                </Form>
            </Modal>
        )
    
    }
};
export default Commentform;