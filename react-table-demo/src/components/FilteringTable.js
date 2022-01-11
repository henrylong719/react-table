import React, { useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './MOCK_DATA';
import { COLUMNS } from './columns';
import './table.css';
import { GlobalFilter } from './GlobalFilter';
import { SelectColumnFilter } from './ColumnFilter';

export const FilteringTable = ({ customerFilterData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: SelectColumnFilter,
    };
  }, []);

  const instance = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    // for global filter
    state,
    setGlobalFilter,
    setFilter,
  } = instance;

  const { globalFilter } = state;

  useEffect(() => {
    console.log(customerFilterData);
    // This will now use our custom filter for age
    setFilter(customerFilterData.id, customerFilterData.data);
  }, [customerFilterData]);

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}

                  <div>{column.canFilter ? column.render('Filter') : null}</div>

                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ⬆' : ' ⬇') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
