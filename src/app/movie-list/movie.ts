export interface MovieTree {
    value: NodeValue;
    children?: MovieTree[];
}

export interface NodeValue {
    type: string;
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}


export interface Movie {
    id: number;
    name: string;
    categories: number[];
}
