import React            from 'react';
import Link             from 'next/link';
import ContentContainer from '@styles/layout/ContentContainer';
import { IArticle }     from '@pages/[articleId]';

const Main: React.FC<{ articles?: IArticle[] }> = ({ articles }) => (
    <ContentContainer>
        <div className="wrapper">
            {articles.map((article) => (
                <Link key={article.id} href={`/${article.slug}`}>
                    <a>{article.title}</a>
                </Link>
            ))}
        </div>
    </ContentContainer>
);

export default Main;
