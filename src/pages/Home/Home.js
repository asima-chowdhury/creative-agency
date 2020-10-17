import React from 'react';
import CarouselWorks from '../../components/HomeComponents/CarouselWorks/CarouselWorks';
import ClientsFeedback from '../../components/HomeComponents/ClientsFeedback/ClientsFeedback';
import Footer from '../../components/HomeComponents/Footer/Footer';
import HeaderMain from '../../components/HomeComponents/HeaderMain/HeaderMain';
import HomeClient from '../../components/HomeComponents/HomeClient/HomeClient';
import HomeServices from '../../components/HomeComponents/HomeServices/HomeServices';

const Home = () => {
    return (// style={{overflowX:'hidden'}}
        <div style={{overflowX:'hidden'}}>
            <HeaderMain/>
            <HomeClient/>
            <HomeServices/>
            <CarouselWorks/>
            <ClientsFeedback/>
            <Footer/>
        </div>
    );
};

export default Home;