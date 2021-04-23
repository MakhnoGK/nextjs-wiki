export interface ITreeNode {
    title     : string;
    children? : ITreeNode[];
    level?    : string;
    index?    : number;
}

export interface ITree {
    data      : ITreeNode[];
    level?    : string;
    isHidden? : boolean;
}
