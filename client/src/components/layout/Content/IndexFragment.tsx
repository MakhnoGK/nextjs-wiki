import React from 'react';

import IndexContainer from '@styles/layout/IndexContainer';

interface IndexItem {
    title: string;
    children?: IndexItem[];
}

const index = [
    { title: 'Etymology' },
    {
        title: 'History',
        children: [
            { title: 'Prehistory' },
            { title: 'Bronze Age' },
            { title: 'Iron age' },
            { title: 'Migration period' },
            { title: 'Viking age' },
            { title: 'Kalmar Union' },
        ],
    },
    { title: 'Geography' },
];

const Index = () => {
    const generateIndex = (element: IndexItem[], level?: number): JSX.Element => {
        return (
            <ul>
                {element.map((item, index) => {
                    return item.children ? (
                        <>
                            <li>
                                <strong>{index + 1}. </strong>
                                {item.title}
                            </li>
                            {generateIndex(item.children, index + 1)}
                        </>
                    ) : (
                        <li>
                            <strong>{level ? `${level}.${index + 1}` : `${index + 1}.`} </strong>
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <IndexContainer>
            <h3 className="indexTitle">Table of content</h3>

            {generateIndex(index)}
        </IndexContainer>
    );
};

export default Index;
