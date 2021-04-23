import React          from 'react';

import IndexContainer from '@styles/layout/IndexContainer';
import { Tree }       from '@components/Tree';

const index = [
    { title: 'Etymology' },
    {
        title: 'History',
        children: [
            { title: 'Prehistory' },
            { title: 'Bronze Age' },
            {
                title: 'Iron age',
                children: [
                    {
                        title: 'test',
                        children: [
                            { title: 'more nested' },
                            { title: 'more nested' },
                        ],
                    },
                    { title: 'test a very vrey logn title' },
                ],
            },
            { title: 'Migration period' },
            { title: 'Viking age' },
            { title: 'Kalmar Union' },
        ],
    },
    { title: 'Geography' },
];

const Index = () => {
    return (
        <IndexContainer>
            <h3 className="indexTitle">Table of content</h3>

            <Tree data={index} />
        </IndexContainer>
    );
};

export default Index;
