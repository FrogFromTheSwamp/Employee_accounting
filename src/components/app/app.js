import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploers-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';
import './app.css'

function App() {

    const data = [
        { name: 'Руслан Г.', salary: 8080, prize: true, id: 1},
        { name: 'Арина Ж.', salary: 5600, prize: false, id: 2},
        { name: 'Настя Б.', salary: 1200, prize: true, id: 3},
        { name: 'Татьяна Ж.', salary: 8900, prize: false, id: 4},
        { name: 'Настя Ж.', salary: 10600, prize: false, id: 5}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmploersList data={data}/>
            <EmploersAddForm />

        </div>
    );
}

export default App