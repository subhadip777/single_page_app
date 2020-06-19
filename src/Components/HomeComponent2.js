import React from 'react';
import 'reactstrap';
import '../Home.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Jumbotron, Row, Button } from 'reactstrap';
import Menuforhome from './MenuforhomeComponent';
import DISHES from '../Shared/Dishes';



function Home2(props){
    return(
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-2">
                        <div className="p-3">
                            <img src="assets/images/logo.png" alt="sppm.com" />
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-10">
                        <div className="p-3">
                            <h3>what we do?</h3>
                            <article>
                            we are a group of 10 -12 peoples who developed this site for creating portfolios to serve the modern developers
                            who struglles to make them polpular in the industries.we create and host a singlepage portfolio in  few clicks. 
                            </article>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>why a portfolio website is important for developers?</h3>

                    </div>
                    
                    <div className="col-11 p-3">
                                            lorem ipsum clearly the whole startup Is based on book readers.. we targeted the 250 million school students and most importantly 70 million lower middleclass students and 50  million collage (higher studies) students.
                                    more specifically students+ book enthusiasts.. no matter if they are working or non working. mostly the low earning, mid earning backgrounded peoples(students+ book enthusiasts) who are looking for a value for money experience .they are our target.
                                    they will use our service because:---
                                    1. we are decreasing the book pricing .
                                    2.giving them the opportunity to resell their books  which they read.
                                    3.they can buy a used book to reduce their expanse..

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="p-2">
                                    <h4> Benifits of having a port folio</h4>
                                    <article>
                                    lorem ipsum clearly the whole startup Is based on book readers.. we targeted the 250 million school students and most importantly 70 million lower middleclass students and 50  million collage (higher studies) students.
                                    more specifically students+ book enthusiasts.. no matter if they are working or non working. mostly the low earning, mid earning backgrounded peoples(students+ book enthusiasts) who are looking for a value for money experience .they are our target.
                                    they will use our service because:---
                                    1. we are decreasing the book pricing .
                                    2.giving them the opportunity to resell their books  which they read.
                                    3.they can buy a used book to reduce their expanse..
                                    </article>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="p-2">
                                    <h4>what is a good portfolio?</h4>
                                    <article >
                                        <ul>
                                            lorem ipsum clearly the whole startup Is based on book readers.. we targeted the 250 million school students and most importantly 70 million lower middleclass students and 50  million collage (higher studies) students.
                                    more specifically students+ book enthusiasts.. no matter if they are working or non working. mostly the low earning, mid earning backgrounded peoples(students+ book enthusiasts) who are looking for a value for money experience .they are our target.
                                    they will use our service because:---
                                    <li>
                                        we are decreasing the book pricing .
                                    </li>
                                    <li>
                                        giving them the opportunity to resell their books  which they read.

                                    </li>
                                    <li>they can buy a used book to reduce their expanse.</li>
                                    
                                        </ul>
                                    .
                                    </article>
        
                            </div>
                        </div>
                        
                    </div>

                    
                </div>
                

            </div>
            <div className="container-fluid bg1">
                <div className="row ">
                <div className=" col-12 text-md-center">
                    <button className="btn btn-outline">
                        lop
                    </button>

                 </div>
                    

                </div>

                
            </div>
       </>
    );
}
export default Home2;