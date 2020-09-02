import React, { Component } from 'react'

class PureComp extends Component {
    render() {
        console.log('render pure component');
        return (
            <div>
                Pure Component {this.props.name}                
            </div>
        )
    }
}

export default PureComp
