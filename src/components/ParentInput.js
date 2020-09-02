import React, { Component } from 'react'
import FriInput from './FriInput'

class ParentInput extends Component {
    
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
     
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FriInput ref={this.inputRef}/> 
                <button onClick={this.clickHandler}>Focus Input</button>               
            </div>
        )
    }
}

export default ParentInput
