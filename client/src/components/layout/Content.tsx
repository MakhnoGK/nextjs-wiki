import React from 'react';
import { MainContainer } from '../../styles';
import IndexFragment from './Content/IndexFragment';
import InfoFragment from './Content/InfoFragment';
import MainFragment from './Content/MainFragment';

const Content = () => {
    return (
        <MainContainer>
            <IndexFragment />
            <MainFragment />
            <InfoFragment />
        </MainContainer>
    );
};

export default Content;
