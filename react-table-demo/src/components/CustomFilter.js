// export function CustomFilterFunction({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   preFilteredRows.filter((row) => row.original.id >= filterValue);
// }

// // Use a custom filter function
// const customFilterFunction = (rows, id, filterValue) =>
//   rows.filter((row) => row.original.age >= filterValue);

// export function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {}

import React from 'react';

export const CustomFilter = ({
  column: { filterValue, setFilter, preFilteredRows },
}) => {
  return preFilteredRows.filter((row) => row.original.age >= filterValue);

  console.log(preFilteredRows);
  return <div></div>;
};

// export function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   // Calculate the options for filtering
//   // using the preFilteredRows
//   const options = React.useMemo(() => {
//     const options = new Set();
//     preFilteredRows.forEach((row) => {
//       options.add(row.values[id]);
//     });
//     return [...options.values()];
//   }, [id, preFilteredRows]);

//   // Render a multi-select box
//   return (
//     <select
//       value={filterValue}
//       onChange={(e) => {
//         setFilter(e.target.value || undefined);
//       }}
//     >
//       <option value="">All</option>
//       {options.map((option, i) => (
//         <option key={i} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// }
