import React from 'react';
import Banner from '../Banner/Banner';
import FindUs from '../FindUs/FindUs';
import ReviewCarouel from '../ReviewCarouel/ReviewCarouel';
import Navigation from '../Shared/Navigation/Navigation';
import WatchCollection from '../WatchCollection/WatchCollection';

const Home = () => {
    return (
        <>
           
                <Navigation></Navigation>
                <Banner></Banner>
                <WatchCollection></WatchCollection>
                <ReviewCarouel />
                <FindUs></FindUs>
         
        </>
    );
};

export default Home;