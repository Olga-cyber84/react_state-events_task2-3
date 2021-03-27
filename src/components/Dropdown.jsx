import React, {useState} from 'react'
import PropTypes from 'prop-types'
import DropdownList from './DropdownList'

function Dropdown(props) {
    const selectBtn = "Account settings"
    const [status, setOptions] = useState(0)
    const onDrop = (e) => {
        e.preventDefault();
        setOptions(prevClicks => prevClicks + 1)
    }
    return (
        <div className="dropdown-wrapper">
            <a href="#" onClick={onDrop}>{selectBtn}</a>
            <DropdownList status={status}/>
        </div>
    )
}

Dropdown.propTypes = {
    selectBtn: PropTypes.string,
    status: PropTypes.number,
    onDrop: PropTypes.func
}

export default Dropdown

