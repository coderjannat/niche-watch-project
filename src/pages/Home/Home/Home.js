import React from 'react';
import ReviewCarouel from '../ReviewCarouel/ReviewCarouel';
import Navigation from '../Shared/Navigation/Navigation';
import WatchCollection from '../WatchCollection/WatchCollection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <WatchCollection></WatchCollection>
            <ReviewCarouel/>
        </div>
    );
};

export default Home;