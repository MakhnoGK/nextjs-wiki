import React from 'react';
import Link from 'next/link';
import ContentContainer from '@styles/layout/ContentContainer';

const Main = () => {
    return (
        <ContentContainer>
            <div className="wrapper">
                <p>
                    Test{' '}
                    <Link href="/">
                        <a>Link</a>
                    </Link>
                </p>
            </div>
        </ContentContainer>
    );
};

export default Main;
