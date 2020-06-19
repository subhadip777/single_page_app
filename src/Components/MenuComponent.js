import React from 'react';
import 'reactstrap';
import { Card, CardTitle, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem,CardFooter } from 'reactstrap';
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
                        <Card id="MENUCARD" >
                            
                            <CardImg src={dish.image} width='100%' height="50%"/>

                                <CardFooter id="MENUFOOTER">
                                <CardTitle  className="ml-(-2)">
                                    <span>
                                         {dish.name}
                                     </span>
                                </CardTitle>
                                <hr/>
                                <Link to={`/menu/${dish.id}`}>

                                    <div id="link">Quick view</div>
                                    </Link>

                                </CardFooter>

                        </Card>
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
                <hr/>

                <div className='row'>
                        {MENU}

                </div>
            </div>
            
        );
    }

};
export default Menu;