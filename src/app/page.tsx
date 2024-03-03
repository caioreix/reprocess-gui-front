import { Search } from 'lucide-react';

import { Columns } from '@/components/Columns';
import { Rows } from '@/components/Rows';
import { CustomColumn, Row, Table } from '@/types/Table';

const mainTable: Table = {
  CustomColumns: [
    { Name: "ID", Path: "ID" },
    { Name: "Error", Path: "Error" },
    { Name: "reprocessed", Path: "Reprocessed" },
  ]
}

const tables: Table[] = [
  {
    Name: "process-users-app",
    CustomColumns: [
      { Name: "WebSite", Path: "Value.WebSite" },
      { Name: "City", Path: "Value.Address.City" },
    ],
  },
  {
    Name: "channels-api",
    CustomColumns: [
      { Name: "Reference", Path: "Headers.id_reference" },
      { Name: "Flow", Path: "Headers.flow" },
      { Name: "Site", Path: "Value.WebSite" }
    ],
    Active: true,
  },
  {
    Name: "channels-api",
    CustomColumns: [
      { Name: "WebSite", Path: "Value.WebSite" },
      { Name: "City", Path: "Value.Address.City" },
    ],
  },
]

const rows: Row[] = [
  {
    ID: "fake-id",
    PageID: "process-users-app",
    Error: "this is my error",
    Value: { Name: "test", WebSite: "https://caioreix.com", Address: { City: "fake-city" } },
    Headers: { id_reference: "my-id", flow: "users" },
    Target: "PROCESS_USERS_RETRY",
    Reprocessed: false,
    CreatedAt: "2024/01/20 14:23:32",
    ReprocessedAt: "2024/01/20 15:23:32",
  },
  {
    ID: "fake-id",
    PageID: "process-users-app",
    Error: "this is my error",
    Value: { Name: "test", WebSite: "https://caioreix.com", Address: { City: "fake-city" } },
    Headers: { id_reference: "my-id", flow: "users" },
    Target: "PROCESS_USERS_RETRY",
    Reprocessed: false,
    CreatedAt: "2024/01/20 14:23:32",
    ReprocessedAt: "2024/01/20 15:23:32",
  },
  {
    ID: "fake-id",
    PageID: "process-users-app",
    Error: "this is my error",
    Value: { Name: "test", WebSite: "https://caioreix.com", Address: { City: "fake-city" } },
    Headers: { id_reference: "my-id", flow: "users" },
    Target: "PROCESS_USERS_RETRY",
    Reprocessed: false,
    CreatedAt: "2024/01/20 14:23:32",
    ReprocessedAt: "2024/01/20 15:23:32",
  }
];

export default function Home() {
  let columns: CustomColumn[] = mainTable.CustomColumns.slice()
  let activatedCount: number = 0
  for (const table of tables) {
    if (table.Active) {
      activatedCount++;
      if (activatedCount > 1) {
        columns = mainTable.CustomColumns.slice()
        break;
      }
      columns.push(...table.CustomColumns)
    }
  }

  const table = (
    <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
      <Columns columns={columns}></Columns>
      <Rows columns={columns} rows={rows}></Rows>
    </table>
  )

  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="bg-white dark:bg-zinc-800 relative shadow-md sm:rounded-lg max-w-7xl overflow-hidden h-fit flex-1 my-10">
        <header className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                </div>
                <input type="text" id="simple-search" className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required />
              </div>
            </form>
          </div>
        </header>
        <main>
          <div className="overflow-x-auto">
            {table}
          </div>
        </main>
        <footer>

        </footer>
      </div>
      <div className="my-10 ml-10 bg-zinc-800 max-h-[80vh] h-fit rounded-xl min-w-60 dark:text-zinc-200">
        <span className="flex justify-center text font-bold text-lg p-1 border-b dark:border-zinc-700">Tables</span>
        <ul className="px-3 py-1 divide-y ">
          {tables.map((page) => (
            <li key={page.Name} id={page.Name} className="flex flex-row space-x-3 px-2 py-2 items-center justify-center border-zinc-600">
              <div className="flex items-center">
                <input id={`checkbox-table-${page.Name}`} type="checkbox" className="w-4 h-4 bg-zinc-100 border-zinc-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600" />
                <label htmlFor={`checkbox-table-search-${page.Name}`} className="sr-only">checkbox</label>
              </div>
              <span className="flex-1 flex items-center mb-0.5">{page.Name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
