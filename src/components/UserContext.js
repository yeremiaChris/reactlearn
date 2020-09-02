import React from 'react'
// didalam createcontextnya itu kita bisa pasang default valuenya
const UserContext = React.createContext('keren')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer} 
export default UserContext