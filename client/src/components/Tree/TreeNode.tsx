import React from 'react';
import Image from 'next/image';

import { ITreeNode } from 'interfaces/ITree';
import { Tree } from '.';
import TreeNodeStyles from '@styles/components/tree/TreeNodeStyles';

const TreeNode: React.FC<ITreeNode> = ({ title, children, topLevel }) => {
    const hasChildren = children ? true : false;

    return (
        <TreeNodeStyles topLevel={topLevel}>
            <div className="titleWrapper">
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

            {hasChildren && <Tree data={children} topLevel={false} />}
        </TreeNodeStyles>
    );
};

export default TreeNode;
