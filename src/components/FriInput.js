import React from 'react'

// function FriInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const FriInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 

export default FriInput
