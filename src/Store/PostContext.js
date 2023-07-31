import React, { useState } from "react";

export const  PostContext=React.createContext(null)


export default function Post({children}){
    const [postDetail,setPostDetails]=useState(null)
    return(

        <PostContext.Provider value={{postDetail,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}