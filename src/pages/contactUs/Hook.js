import React from 'react';
import {useTable} from 'react-table';

export const columns = [
    {
        Header: '北京（总部）',
        accessor: 'beijing',
    },
    {
        Header: '上海（分部）',
        accessor: 'shanghai',
    }
];

export const data = [
    {
        beijing: '朝阳区',
        shanghai: '浦东新区'
    },
    {
        beijing: '北京email',
        shanghai: '上海email'
    },
];

function AppHook({columns, data}) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()} key={i}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default AppHook;
