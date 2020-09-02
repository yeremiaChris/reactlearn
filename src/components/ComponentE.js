import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    
    static contextType = UserContext

    render() {
        return(
            <div>
                component e context {this.context}
                <ComponentF />  
            </div>
        ) 
    }
}
// ComponentE.contextType = UserContext
// bisa di ganti dengan static di atas
export default ComponentE
