import { useEffect, useState } from 'react';
import Head from 'next/head';

import { testGet } from '../api/test';
import { MainContainer } from '../styles';

const Home = () => {
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        testGet().then((response) => setMessage(response));
    }, []);

    return (
        <>
            <Head>
                <title>Smart Wiki - Main</title>
            </Head>
            <MainContainer>
                <h1>Smart Wiki</h1>
                <p>Message from server: {message ? message : 'Loading...'}</p>
            </MainContainer>
        </>
    );
};

export default Home;
