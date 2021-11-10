import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import WatchCollection from '../WatchCollection/WatchCollection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <WatchCollection></WatchCollection>
        </div>
    );
};

export default Home;