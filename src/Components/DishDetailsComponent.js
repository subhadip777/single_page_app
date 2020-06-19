import React from 'react';
import 'reactstrap';
import { Card, CardImg, CardText, CardTitle, CardBody,Breadcrumb,BreadcrumbItem, Button, FormGroup, Label,Modal,ModalHeader,ModalBody,ModalFooter  } from 'reactstrap';
import {Link} from 'react-router-dom';
import 'react-router-dom';
import { Control, Errors,LocalForm } from 'react-redux-form';






const required = (val)=>val && val.length;
const maxlength=(len)=>(val)=> !(val) || (val.length <= len);
const minlength =(len)=>(val)=> val && (val.length >=len);

class Commentform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            iscommentopen:false,
        }
        this.togglecommentform=this.togglecommentform.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    togglecommentform(){
        this.setState({iscommentopen: !this.state.iscommentopen });
        

    }
    handleSubmit(values){
       this.props.addComment(this.props.dishId,values.rating,values.name,values.comment)
       this.togglecommentform();

    }
   

    render(){
        return(
            <>
                <div>

                    <Button className="btn btn-outline btn dark" onClick={this.togglecommentform}>

                        <span className="fa fa-comment"></span>
                                    Add comment
                    </Button>

                </div>

                <Modal isOpen={this.state.iscommentopen} toggle={this.togglecommentform} id="commentmodal">
                    <LocalForm className="p-2 " onSubmit={(values)=>this.handleSubmit(values)}>
                        <ModalHeader toggle={this.togglecommentform}>
                            <strong className="p-10">
                                COMMENT
                            </strong> 
                        
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup >
                                <label htmlFor="rating" className="">Rating :</label>
                                <Control.select model=".rating" id="rating" name="rating" className=" form-control">
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
                                            required,maxlength:maxlength(15),minlength:minlength(2)
                                        }}
                                        />
                                       <Errors model=".name" show="touched" className="text-danger is-error" messages={{required:'Required', maxlength:'number of charecters must be less than 15', minlength:'number of charecters must be greater than 2'}}/>
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
                        
                        
                    </LocalForm>
                </Modal>
            </>
        )
    
    }
};


class Dishdetails extends React.Component{
    


    

 
    renderdishdetails({dish}){
        return(
            <div className='mt-2 mb-2'>
            <Card >
                <CardImg src={dish.image} width="50%"/>
                <CardBody>
                    <CardTitle>
                        <strong>
                            {dish.name}
                        </strong>
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>

            </Card>
            </div>
        )
    }
    renderDishComments({comments , addComment,dishId}){
        if(comments!=null){
            return(
                comments.map((comment)=>(
                    <div  className=''>
                    <ul key={comment.id}>
                        <li>
                           NAME: {comment.author}
                        </li>
                        <li>
                           RATING: {comment.rating}*
                        </li>
                        <li>.
                           COMMENT: {comment.comment}
                        </li>
                        <li>
                           DATE: {comment.date}
                        </li>
                    </ul>
                    <hr/>
                    </div>
                ))
            )
        }
        else{
            return(
                <div></div>
            )
        }
    };

    




    render(){
        return(
                <>
                    <div className='container'>
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/menu">
                                        Menu
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    {this.props.dish.name}
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr/>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <this.renderdishdetails dish={this.props.dish}/>
                            </div>
                            <div className='col-12 col-md-6'>
                                <this.renderDishComments comments ={this.props.comments}
                                addcomment={this.props.addComment}
                                dishId={this.props.dish.id}
                                />
                                <div className="p-2">
                                    
                                <Commentform dishId={this.props.dish.id} addComment={this.props.addcomment} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Modal isOpen={this.state.iscommentopen} toggle={this.togglecommentform}>
                        <ModalHeader toggle={this.togglecommentform}>hello ji</ModalHeader>
                        <Commentform/>
                    </Modal> */}
                    
                 </>

        );
    }


};
export default Dishdetails;

