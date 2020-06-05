import React from 'react';
import 'reactstrap';
import { Card, CardImg, CardText, CardTitle, CardBody,Breadcrumb,BreadcrumbItem, } from 'reactstrap';
import {Link} from 'react-router-dom';


class Dishdetails extends React.Component{

 
    renderdishdetails(dish){
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
    renderDishComments(comments){
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
                    {this.renderdishdetails(this.props.dish)}
                </div>
                <div className='col-12 col-md-6'>
                     {this.renderDishComments(this.props.comments)}

                </div>

            </div>
            </div>

        );
    }


};
export default Dishdetails;

