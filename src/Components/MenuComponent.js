import React from 'react';
import 'reactstrap';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Dishdetails from './DishDetailsComponent';
import 'react-router-dom';
import { Link } from 'react-router-dom';


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
    }
    // onDishselect(dish){
    //     if(this.state.selectedDish === dish){
    //         this.setState({selectedDish:null});
    //     }
    //     else{
    //         this.setState({selectedDish:dish});
    //     }

    // }
    // renderdish(dish){
    //     if (dish!=null){
    //         return(
    //             <Dishdetails dish={this.state.selectedDish}/>
    //             );

    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }
    // };
    render(){
        const MENU =this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className='col-12 col-lg-3 m-0 mt-2 mb-2'>
                    <Link to={`/menu/${dish.id}`}>
                        <Card >
                            <CardImg src={dish.image} width='100%'/>
                            <CardImgOverlay className='ml-5'>
                                <CardTitle>
                                    <strong>
                                        {dish.name}
                                    </strong>
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </Link>
                </div>

            );      

        });
        


        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to="/home">
                            Home
                        </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>

                </div>
                <div className='row'>
                        {MENU}

                </div>
            </div>
            
        );
    }

};
export default Menu;