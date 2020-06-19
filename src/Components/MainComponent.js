import React from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import contact from './ContactComponent';
import Dishdetails from './DishDetailsComponent';
import 'react-router-dom';
import { Switch,Route, Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home2 from './HomeComponent2';
import { addcomment } from '../redux/ActionCreator';


const mapStateToProps =(state) =>{
    //this function constant converts the state into props that is usable by the components
    return{
        dishes:state.dishes,
        Comments:state.Comments,
        Promotions:state.Promotions,
        leaders:state.Leaders
    }
}


const mapDispatchToprops=(dispatch)=>({
    addcomment :(dishId,rating,author,comment)=>dispatch(addcomment(dishId,rating,author,comment))

})


class Main extends React.Component{
    




    render(){
        const HomePage= ()=>{
            return(
                <Home dish={this.props.dishes.filter((dish)=>dish.featured )[0]}
                promotion={this.props.Promotions.filter((promo)=>promo.featured )[0]}
                leader={this.props.leaders.filter((lead)=>lead.featured )[0]}
                />
            )
        }

        const DishWithId=({match})=>{
            return(
            <Dishdetails dish={this.props.dishes.filter((dish)=>dish.id ===parseInt(match.params.dishId,10))[0]}
              comments={this.props.Comments.filter((comment)=>comment.dishId ===parseInt(match.params.dishId,10))}
              addcomment={this.props.addcomment}
            />
            );

        }

        return(
            <div className='APP'>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home2} />
                    <Route exact path="/Menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/contactus" component={Contact} />
                    <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>

            </div>
            
        );
        
    };




};
export default withRouter(connect(mapStateToProps,mapDispatchToprops)(Main));