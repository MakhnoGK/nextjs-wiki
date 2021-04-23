import { MainContainer } from '@styles/index';
import IndexFragment     from '@components/layout/Content/IndexFragment';
import MainFragment      from '@components/layout/Content/MainFragment';
import InfoFragment      from '@components/layout/Content/InfoFragment';
import Footer            from '@components/layout/Footer';
import React             from 'react';
import Head              from 'next/head';
import { IArticle }      from '@pages/[articleId]';
import PropTypes         from 'prop-types';

const ArticlePage = ({ articles }) => (
    <>
        <Head>
            <title>Article</title>
        </Head>
        <MainContainer>
            <IndexFragment />
            <MainFragment articles={articles} />
            <InfoFragment />
            <Footer />
        </MainContainer>
    </>
);

export default ArticlePage;
