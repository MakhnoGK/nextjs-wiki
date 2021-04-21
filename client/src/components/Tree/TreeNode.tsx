import React, { useState } from 'react';
import Image from 'next/image';

import { ITreeNode } from 'interfaces/ITree';
import { Tree } from '.';
import TreeNodeStyles from '@styles/components/tree/TreeNodeStyles';

const TreeNode: React.FC<ITreeNode> = ({ title, children, level, index }) => {
    const [chilrenHidden, setChilrenHidden] = useState<boolean>(true);

    const nestLevel = level?.split('.').length + 1;
    const hasChildren = children ? true : false;

    const handleToggleChildren = () => {
        if (!hasChildren) return;

        setChilrenHidden((state) => !state);
    };

    return (
        <TreeNodeStyles level={!Number.isNaN(nestLevel) ? nestLevel : 1}>
            <div className="titleWrapper" onClick={handleToggleChildren}>
                <span className="level">
                    {level && `${level}.`}
                    {index + 1}
                    {!level && '.'}
                </span>

                <span className="title">{title}</span>

                {hasChildren && (
                    <span className="arrow">
                        <Image
                            src="/assets/images/icons/chevron-down.svg"
                            alt="expand"
                            width={16}
                            height={16}
                        />
                    </span>
                )}
            </div>

            {hasChildren && (
                <Tree
                    data={children}
                    level={`${level ? `${level}.` : ''}${index + 1}`}
                    isHidden={chilrenHidden}
                />
            )}
        </TreeNodeStyles>
    );
};

export default TreeNode;
