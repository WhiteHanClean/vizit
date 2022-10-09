
import React from 'react';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/intro/Intro';
import Order from '../../components/order/Order';
import Social from '../../components/social/Social';

const Main = () => {
    return (
        <>
            <Intro/>
            <Order/>
            <Social/>
            <Footer/>
        </>
    );
};

export default Main;