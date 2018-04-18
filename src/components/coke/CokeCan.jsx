import React from 'react'

const CokeCan = ({ isShaking }) => (
    <div className="frame">
        <div className={isShaking ? "can" : ""}>
            <img src={require('../../assets/coke-can.png')} alt="coke-can"/>
        </div>
    </div>
)

export default CokeCan