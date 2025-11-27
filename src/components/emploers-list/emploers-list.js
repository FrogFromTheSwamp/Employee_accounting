import EmploersListItem from "../emploers-list-item/emploers-list-item"
import './emploers-list.css'

const EmploersList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmploersListItem {...item}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploersList