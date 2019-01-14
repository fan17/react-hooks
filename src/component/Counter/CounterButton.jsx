import React from 'react'
import PropTypes from 'prop-types'

const CounterButton = ({ increment, onClickFunction }) => {
    const handleClick = () => {
        onClickFunction(increment)
    }
    return (
        <button type="button" onClick={handleClick}>
            +{increment}
        </button>
    )
}

CounterButton.propTypes = {
    increment: PropTypes.number.isRequired,
    onClickFunction: PropTypes.func.isRequired,
}

export default CounterButton
