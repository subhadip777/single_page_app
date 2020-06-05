import React from 'react';
import DISHES from '../Shared/Dishes';
import LEADERS from '../Shared/Leaders';
import PROMOTIONS from '../Shared/Promotions';
import COMMENTS from '../Shared/Comments';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import contact from './ContactComponent';
import Dishdetails from './DishDetailsComponent';
import 'react-router-dom';
import { Switch,Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SelectedDish:null,
            dishes:DISHES,
            Comments:COMMENTS,
            Leaders:LEADERS,
            Promotions:PROMOTIONS


        };
    }




    render(){
        const HomePage= ()=>{
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured )[0]}
                promotion={this.state.Promotions.filter((promo)=>promo.featured )[0]}
                leader={this.state.Leaders.filter((lead)=>lead.featured )[0]}
                />
            )
        }

        const DishWithId=({match})=>{
            return(
            <Dishdetails dish={this.state.dishes.filter((dish)=>dish.id ===parseInt(match.params.dishId,10))[0]}
              comments={this.state.Comments.filter((comment)=>comment.dishId ===parseInt(match.params.dishId,10))}
            />
            );

        }

        return(
            <div className='APP'>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/Menu" component={()=> <Menu dishes={DISHES}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route path="/contactus" component={Contact} />

                    <Redirect to="/home"/>
                </Switch>
                <Footer/>

            </div>
            
        );
        
    };




};
export default Main;