import React, { Component } from 'react'

class RefsDemo extends Component {
    
    constructor(props) {
        super(props)
        
        this.inputref = React.createRef()
        // cara lain
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    } 

    // melihat bagaimana inputref ini setelah di buat
    componentDidMount() {
        
        if(this.cbRef) {
            this.cbRef.focus()
        }
        
        // yang bawah ini membuat autofocus pada input element
        // this.inputref.current.focus()
        // console.log(this.inputref);
        
        
    }
    
    clickHandler = () => {
        alert(this.inputref.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
