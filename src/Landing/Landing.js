import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from './Banner';
import Course from './Course';
import Event from './Event';
import Testimony from './Testimony';
import Blog from './Blog';
import Subscribe from './Subscribe';

function Landing(){
    return(
        <>
            <Header/>
            <Banner/>
            <Course/>
            <Event/>
            <Testimony/>
            <Blog/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

    export default Landing;