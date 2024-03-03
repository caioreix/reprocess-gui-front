export type Table = {
    Name?: string,
    CustomColumns: CustomColumn[],
    Active?: boolean,
}

export type CustomColumn = {
    Name: string,
    Path: string,
    Active?: boolean,
}

export type Row = {
    ID: string,
    PageID: string,
    Error: string,
    Value: any,
    Headers: any,
    Target: string,
    Reprocessed: boolean,
    CreatedAt: string,
    ReprocessedAt: string,
}
