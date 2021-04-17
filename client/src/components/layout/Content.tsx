import React from 'react';
import { MainContainer } from '../../styles';
import IndexFragment from './Content/IndexFragment';
import InfoFragment from './Content/InfoFragment';
import MainFragment from './Content/MainFragment';
import Footer from './Footer';

const Content = () => {
    return (
        <MainContainer>
            <IndexFragment />
            <MainFragment />
            <InfoFragment />
            <Footer />
        </MainContainer>
    );
};

export default Content;
