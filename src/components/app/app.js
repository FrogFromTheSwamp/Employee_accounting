import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../emploers-list/emploers-list';
import EmploersAddForm from '../emploers-add-form/emploers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Руслан Г.', salary: 8080, increase: true, rise: false, id: nextId()},
                { name: 'Арина Ж.', salary: 5600, increase: false, rise: false, id: nextId()},
                { name: 'Настя Б.', salary: 1200, increase: true, rise: false, id: nextId()},
                { name: 'Татьяна Ж.', salary: 8900, increase: false, rise: false, id: nextId()},
                { name: 'Настя Ж.', salary: 10600, increase: false, rise: false, id: nextId()}
            ],
            term: '',
            activeFilter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: nextId()
        }
        if (name && salary) {
            this.setState(({data}) => {
                if (name && salary) {
                    const newArr = [...data, newItem];
                    return {
                        data: newArr
                    }
                }
                return data
            });
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term) {
            return items.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }
        return items
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onFilterRise = (items) => {
        return items.filter(item => {
            return item.rise === true
        })
    }

    onFilterSalary = (items) => {
        return items.filter(item => {
            return item.salary > 1000
        })
    }

    onFilterSelect = (filter) => {
        this.setState({ activeFilter: filter })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'salary': 
                return items.filter(item => item.salary > 1000);
            default: return items
        }
    }

    render() {
        const { data, term, activeFilter } = this.state;

        const emploees = data.length;
        const increaseEmploees = data.filter(item => item.increase).length;

        let visibleData = this.searchEmp(data, term);

        if (activeFilter === 'rise') {
            visibleData = this.onFilterRise(visibleData);
        } else if (activeFilter === 'salary') {
            visibleData = this.onFilterSalary(visibleData);
        }

        return (
            <div className="app">
                <AppInfo 
                emploees={emploees}
                increaseEmploees={increaseEmploees}
                />

                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                    activeFilter={this.state.activeFilter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <EmploersList data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                />
                <EmploersAddForm
                onAdd={this.addItem}
                />

            </div>
        );
    }
}

export default App