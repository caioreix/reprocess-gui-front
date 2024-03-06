import { Table } from '@/types/Table';

const tables: Table[] = [
    {
        "Name": "process-users-app",
        "CustomColumns": [
            { "Name": "WebSite", "Path": "Value.WebSite" },
            { "Name": "City", "Path": "Value.Address.City" }
        ],
        "Active": true
    },
    {
        "Name": "channels-api",
        "CustomColumns": [
            { "Name": "Reference", "Path": "Headers.id_reference" },
            { "Name": "Flow", "Path": "Headers.flow" },
            { "Name": "Site", "Path": "Value.WebSite" }
        ],
    },
    {
        "Name": "accounts-api",
        "CustomColumns": [
            { "Name": "WebSite", "Path": "Value.WebSite" },
            { "Name": "City", "Path": "Value.Address.City" }
        ]
    },
    {
        "Name": "users-api",
        "CustomColumns": [
            { "Name": "UserName", "Path": "Value.UserName" },
            { "Name": "Email", "Path": "Value.Email" },
            { "Name": "Status", "Path": "Value.Status" }
        ],
    },
    {
        "Name": "orders-api",
        "CustomColumns": [
            { "Name": "OrderID", "Path": "Value.OrderID" },
            { "Name": "Product", "Path": "Value.Product" },
            { "Name": "Quantity", "Path": "Value.Quantity" }
        ]
    }
];

export function getTables(): Table[] {
    return tables
}
