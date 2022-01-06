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
      {/* <p>Min age is {age}</p>
      <input
        type="range"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      /> */}
      <SetColumnOrderTable />
    </div>
  );
}

export default App;
