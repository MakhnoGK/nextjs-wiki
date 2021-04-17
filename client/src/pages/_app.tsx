import { AppProps } from 'next/dist/next-server/lib/router/router';

import { Navbar } from '../components';
import { GlobalStyles, MainContainer } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </>
    );
}

export default MyApp;
