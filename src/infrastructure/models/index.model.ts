export interface Response {
    status: number;
    message: string;
    data: Object[] | Object | undefined;
}

export interface Paginate {
    offset: number;
    limit: number;
    data: Object[] | Object | undefined;
}
