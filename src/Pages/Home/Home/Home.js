import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Inventories from '../Inventories/Inventories';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <TeamMember></TeamMember>
            <Faq></Faq>
        </div>
    );
};

export default Home;