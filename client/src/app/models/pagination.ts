export interface MetaData {
    currentPage: number;
    totalPages:number;
    pageSize:number;
    totalCount:number;
}


export class PaginatedResponse<T> {
    Items:T;
    metaData:MetaData;

    constructor(items:T, metaData:MetaData){
        this.Items = items;
        this.metaData = metaData;
    }
}