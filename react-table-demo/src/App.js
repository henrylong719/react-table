import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { SelectColumnFilter } from './components/ColumnFilter';
import { useState } from 'react';
import { OutsideFilteringTable } from './components/OutsideFilterTable';
import { CustomFilter } from './components/CustomFilter';
import { PaginationTable } from './components/PaginationTable';
import { SetColumnOrderTable } from './components/SetColumnOrderTable';

function App() {
  const [age, setAge] = useState(0);
  return (
    <div className="App">
      <p>Min age is {age}</p>

      <select
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      >
        <option value="">All</option>
        <option key={1} value={38}>
          38
        </option>

        <option key={2} value={39}>
          39
        </option>
      </select>

      {/* <input
        type="range"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      /> */}
      <FilteringTable customerFilterData={{ id: 'age', data: age }} />
    </div>
  );
}

export default App;
