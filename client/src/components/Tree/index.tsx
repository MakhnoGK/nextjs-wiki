import React from 'react';

import TreeNode from './TreeNode';

import { ITree, ITreeNode } from 'interfaces/ITree';

import TreeStyles from '@styles/components/tree/TreeStyles';

export const Tree: React.FC<ITree> = ({ data, level, isHidden = false }) => {
    return (
        <TreeStyles isHidden={isHidden}>
            {data.map((node: ITreeNode, key: number) => {
                return (
                    <TreeNode
                        key={key}
                        title={node.title}
                        children={node?.children}
                        index={key}
                        level={level}
                    />
                );
            })}
        </TreeStyles>
    );
};

export { default as TreeNode } from './TreeNode';
