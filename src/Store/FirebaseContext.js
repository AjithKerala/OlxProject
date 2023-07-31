import React,{ createContext, useState}from "react"


export const FirebaseContext=createContext(null)

export const AuthContext=React.createContext(null)


function Context({children}){
    const[user,setUser]=useState("Aji")

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default Context