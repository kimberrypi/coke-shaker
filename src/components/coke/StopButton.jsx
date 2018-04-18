import React from 'react'

const StopButton = ({positionLeft, positionRight, stopShaking, moveButton}) => {
    
    var buttonStyles = {
        color: "white",
        backgroundColor: "#920000",
        position: "fixed",
        left: {positionLeft},
        bottom: "150px"
    }
    
    return(
            <button className="button is-coke is-large" style={buttonStyles} 
            onClick={stopShaking}
            >
            Stop!
        </button>
        )
}

export default StopButton