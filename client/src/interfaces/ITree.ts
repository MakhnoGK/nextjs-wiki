export interface ITreeNode {
    title: string;
    children?: ITreeNode[];
    topLevel?: boolean;
}

export interface ITree {
    data: ITreeNode[];
    topLevel?: boolean;
}
