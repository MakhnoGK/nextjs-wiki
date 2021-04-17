import React from "react";
import Link from 'next/link';
import ContentContainer from "@styles/layout/ContentContainer";

const Main = () => {
    return (
        <ContentContainer>
            <p>
                Test <Link href="/"><a>Link</a></Link>
            </p>
        </ContentContainer>
    );
};

export default Main;
