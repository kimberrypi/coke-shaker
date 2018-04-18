import React, { Component } from 'react'
import CokeCan from './CokeCan'
import StopButton from './StopButton'

class CokeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShaking: true
        }
    }

    componentDidMount() {
        this.startShaking()
    }

    startShaking = () => {
        this.setState({
            isShaking: true
        })
    }

    stopShaking = () => {
        this.setState({
            isShaking: false
        })
        setTimeout(this.startShaking, Math.random()*4000)
    }

    render() {
        return(
            <div>
                <CokeCan isShaking={this.state.isShaking}/>
                <div className="frame">
                <StopButton 
                    stopShaking={this.stopShaking}
                    />
                </div>
            </div>
        )
    }
}

export default CokeContainer