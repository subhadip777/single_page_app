import React from 'react';
import 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
function RenderCard(prop){
    return(
        <Card>
            <CardImg src={prop.item.image} alt={prop.item.name} />
            <CardBody>
                <CardTitle>
                    {prop.item.name}
                </CardTitle>
                <CardSubtitle>{prop.item.designation}</CardSubtitle>
                <CardText>
                    {prop.item.description}
                </CardText>

            </CardBody> 
        </Card>


    )
}


function Home(props){
    return(
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>

            </div>
        </div>

    );
}
export default Home;