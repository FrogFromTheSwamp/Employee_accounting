import { Component} from 'react';
import classNames from 'classnames';

import './emploers-list-item.css'

class EmploersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prize: false,
            like: false,
        }
    }

    onPrize = () => {
        this.setState(({prize}) => ({
            prize: !prize
        }))
    }

    likeEmploer = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const { name, salary } = this.props;
        const { prize, like } = this.state;

        const itemClass = classNames('list-group-item d-flex justify-content-between',
            {' increase': prize},
            {' like': like}
        )

        return (
            <li className={itemClass} >
                <span className="list-group-item-label" onClick={this.likeEmploer}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary} $`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onPrize}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmploersListItem