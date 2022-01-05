import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { SelectColumnFilter } from './components/ColumnFilter';

function App() {
  return (
    <div className="App">
      <FilteringTable />
    </div>
  );
}

export default App;
