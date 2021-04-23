import React          from 'react';
import ArticlePage    from '@components/pages/ArticlePage';
import { IPageProps } from '@interfaces/IPageProps';

export interface IArticle {
    id: number;
    title: string;
    slug: string;
    content: string;
}

const Article: IPageProps<{ data: IArticle[] }> = ({ data }) => <ArticlePage articles={data} />;

Article.getInitialProps = async ({ query }) => {
    const { articleId } = query;

    const response = await fetch(`http://localhost:4000/api/v1/article/${articleId}`);
    const data: IArticle[] = await response.json();

    return {
        data
    };
};

export default Article;
