import React from 'react';
import Clients from '../Clients/Clients';
import Package from '../Packages/Package';
import MiddlePart from '../Parts/MiddlePart';
import Profile from '../Profile/Profile';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <MiddlePart></MiddlePart>
            <Package></Package>
            <Clients></Clients>
        </div>
    );
};

export default Home;