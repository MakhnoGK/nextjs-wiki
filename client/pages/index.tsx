import { useEffect, useState } from 'react';
import { testGet } from '../api/test';
import { MainContainer } from '../styles';

const Home = () => {
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        testGet().then((response) => setMessage(response));
    }, []);

    return (
        <MainContainer>
            <h1>Smart Wiki</h1>
            <p>Message from server: {message ? message : 'Loading...'}</p>
        </MainContainer>
    );
};

export default Home;
