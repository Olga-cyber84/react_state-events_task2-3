import React from 'react'
import PropTypes from 'prop-types'
import DropdownItem from './DropdownItem'

function DropdownList({status}) {
    const options = ["Profile Information", "Change Password", "Become PRO", "HELP", "Log Out"];
    return (
        status % 2 === 1 ? <DropdownItem options={options}/> : null
    )
}

DropdownList.propTypes = {
    oprions: PropTypes.array
}

export default DropdownList

