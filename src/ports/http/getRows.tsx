import { Filters } from '@/types/Filter';
import { Row } from '@/types/Table';

export function getRows(size: number, filters: Filters) {
    return generateRows(size)
}

function generateRows(size: number, filters: Filters = {}): Row[] {
    const originalRow: Row = {
        ID: "fake-id",
        PageID: "process-users-app",
        Error: "this is my error",
        Value: { Name: "test", WebSite: "https://caioreix.com", Address: { City: "fake-city" } },
        Headers: { id_reference: "my-id", flow: "users" },
        Target: "PROCESS_USERS_RETRY",
        Reprocessed: false,
        CreatedAt: "2024/01/20 14:23:32",
        ReprocessedAt: "2024/01/20 15:23:32",
    };

    const generatedRows: Row[] = [];
    for (let i = 0; i < size; i++) {
        const newRandomRow: Row = JSON.parse(JSON.stringify(originalRow));

        newRandomRow.ID = Math.random().toString(36).substring(7);
        newRandomRow.Error = "Random Error " + i;
        newRandomRow.Target = "Random Target " + i;
        newRandomRow.Value.WebSite = newRandomRow.Value.WebSite + ' ' + i;
        newRandomRow.Value.Address.City = newRandomRow.Value.Address.City + ' ' + i;

        generatedRows.push(newRandomRow);
    }

    return generatedRows
}
