import React from 'react';
import Banner from '../Banner/Banner';
import GoogleMap from '../GoogleMap/GoogleMap';
import ReviewCarouel from '../ReviewCarouel/ReviewCarouel';
import Navigation from '../Shared/Navigation/Navigation';
import WatchCollection from '../WatchCollection/WatchCollection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <WatchCollection></WatchCollection>
            <ReviewCarouel/>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;