import { Filter } from 'lucide-react';

import { CustomColumn } from '@/types/Table';

interface ColumnProps {
    columns: CustomColumn[];
    children?: string;
}

export const Columns: React.FC<ColumnProps> = (props: ColumnProps) => {
    return (
        <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
            <tr>
                <th key="checkbox" id="checkbox" scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 bg-zinc-100 border-zinc-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600" />
                        <label htmlFor="checkbox-all" className="sr-only"></label>
                    </div>
                </th>
                {
                    props.columns.map((column) => (
                        <th key={column.Path} id={column.Path} scope="col" className="px-1 py-3">
                            <div className='flex items-center space-x-2'>
                                <span className='flex  items-center'>{column.Name}</span>
                                <div className='flex'>
                                    <label htmlFor={`filter-${column}`} className="sr-only">Filter {column.Name}</label>
                                    <button id={`filter-${column.Path}`} className='bg-zinc-600 p-[3px] hover:outline active:outline-zinc-500 outline-1 active:scale-90  transform active:bg-zinc-700 border-zinc-400 w-5 h-5 flex items-center justify-center rounded-md'>
                                        <Filter className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                    </button>
                                </div>
                            </div>
                        </th>
                    ))
                }
            </tr>
        </thead>
    )
}
