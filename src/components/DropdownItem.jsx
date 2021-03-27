import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem({options}) {
    return (
        <ul className="dropdown">
            {options.map((option, i)=> {
                return <li key={i}><a href="#">{option}</a></li>
                })
            }
        </ul>
    )
}

DropdownItem.propTypes = {
    options: PropTypes.array
}

export default DropdownItem

