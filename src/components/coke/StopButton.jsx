import React from 'react'

const StopButton = ({ stopShaking, moveButton }) => (
        <button 
            className="button is-coke is-large" 
            onClick={stopShaking}
            >
            Stop!
        </button>
    )

export default StopButton