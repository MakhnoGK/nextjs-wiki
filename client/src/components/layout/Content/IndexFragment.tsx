import React from 'react';
import Image from 'next/image';

import IndexContainer, {
    IndexTitleContainer,
} from '@styles/layout/IndexContainer';

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
            {
                title: 'Iron age',
                children: [
                    { title: 'test' },
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
    const generateIndex = (
        element: IndexItem[],
        level?: number,
    ): JSX.Element => {
        return (
            <ul>
                {element.map((item, index) => {
                    return (
                        <IndexTitleContainer key={index} level={level}>
                            <span className="titleWrapper">
                                <strong>
                                    {level > 2 && `${level - 1}.`}
                                    {level && `${level}.`}
                                    {index + 1}
                                    {!level && '.'}
                                </strong>
                                {item.title}
                                {item?.children && (
                                    <span className="arrow">
                                        <Image
                                            src="/assets/images/icons/chevron-down.svg"
                                            alt="Expand"
                                            width={16}
                                            height={16}
                                        />
                                    </span>
                                )}
                            </span>
                            {item.children &&
                                generateIndex(item.children, index + 1)}
                        </IndexTitleContainer>
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
