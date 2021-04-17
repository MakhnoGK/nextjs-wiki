import Head from 'next/head';
import React from 'react';
import Content from '../components/layout/Content';

const Home = () => {
    return (
        <>
            <Head>
                <title>Smart Wiki - Main</title>
            </Head>
            <Content />
        </>
    );
};

export default Home;
