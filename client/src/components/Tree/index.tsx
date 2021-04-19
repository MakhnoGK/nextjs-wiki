import React from 'react';

import TreeNode from './TreeNode';

import { ITree, ITreeNode } from 'interfaces/ITree';

import TreeStyles from '@styles/components/tree/TreeStyles';

export const Tree: React.FC<ITree> = ({ data, topLevel = true }) => {
    return (
        <TreeStyles>
            {data.map((node: ITreeNode, key: number) => {
                return (
                    <TreeNode
                        key={key}
                        title={node.title}
                        children={node?.children}
                        topLevel={topLevel}
                    />
                );
            })}
        </TreeStyles>
    );
};

export { default as TreeNode } from './TreeNode';
