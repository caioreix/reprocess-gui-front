import { CustomColumn, Row } from '@/types/Table';

interface RowProps {
    columns: CustomColumn[]
    rows: Row[];
    children?: string;
}

export const Rows: React.FC<RowProps> = (props: RowProps) => {
    return (
        <tbody>
            {props.rows.map((row, i) => (
                <tr key={row.ID} className="px-5">
                    <td key={`checkbox-row-key-${i}`} className="w-4 px-4 py-3">
                        <div className="flex items-center">
                            <input id={`checkbox-row-${i}`} type="checkbox" className="w-4 h-4 bg-zinc-100 border-zinc-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600" />
                            <label htmlFor={`checkbox-row-${i}`} className="sr-only">checkbox</label>
                        </div>
                    </td>
                    {props.columns.map((column) => (
                        <td key={`${row.ID}-${column.Path}`} className="px-1 py-3">{getValueFromObjectByPath(row, column.Path)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

function getValueFromObjectByPath(object: any, path: string): string {
    const parts = path.split('.')

    for (let part of parts) {
        if (object.hasOwnProperty(part)) {
            object = object[part];
        } else {
            object = undefined;
            break;
        }
    }

    switch (typeof object) {
        case "object":
            return JSON.stringify(object)
        default:
            return String(object)
    }
}
