import { AppProps } from 'next/dist/next-server/lib/router/router';

import { Navbar } from '../components';
import Footer from '../components/layout/Footer';
import { GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
