import { NextPageContext } from 'next';
import React               from 'react';

export interface IPageProps<T> extends React.FC<T> {
    getInitialProps?: (context?: NextPageContext) => Promise<T>;
}
