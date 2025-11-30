import { Component } from 'react'
import './app-filter.css'

class AppFilter extends Component {
    render() {
        const { activeFilter, onFilterSelect } = this.props

        return (
            <div className="btn-group">
                <button 
                className={activeFilter === 'all' ? 'btn btn-light' : 'btn btn-outline-light'}
                type="button"
                onClick={() => {onFilterSelect('all')}}
                >Все сотрудники</button>
                <button 
                className={activeFilter === 'rise' ? 'btn btn-light' : 'btn btn-outline-light'}
                type="button"
                onClick={() => {onFilterSelect('rise')}}
                >На повышение</button>
                <button 
                className={activeFilter === 'salary' ? 'btn btn-light' : 'btn btn-outline-light'}
                type="button"
                onClick={() => {onFilterSelect('salary')}}
                >З/П больше 1000$</button>
            </div>
    )
    }
}

export default AppFilter