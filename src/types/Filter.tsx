export type Filters = {
    Order?: Order
    OrderTarget?: string
    Filters?: Map<string, Filter>
}

export type Filter = {
    Operator: Operator
    Filters: string[]
};

export enum Order {
    Asc,
    Desc,
};

export enum Operator {
    Is,
    IsNot,
    Exists,
    DoesNotExists,
    StartWith,
    IsOneOf,
    IsNotOneOf,
};
