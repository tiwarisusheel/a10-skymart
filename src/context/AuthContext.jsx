import { createContext, useState } from "react";

 export const AuthContext =  createContext();

 export const AuthProvider = ({children})=>{
         const [users, setUsers] = useState(()=>{
            const savedUsers = localStorage.getItem("users");
            return savedUsers ? JSON.parse(savedUsers) : [];
         });
         const [currentUser, setCurrentUser] = useState(()=>{
            const savedUsers = localStorage.getItem("currentUser");
            return savedUsers ? JSON.parse(savedUsers) : null
         })

         console.log("users:", users);
         console.log("currentUser:", currentUser);

         const logOut = ()=>{
            setCurrentUser(null);
            localStorage.removeItem("currentUser");
            console.log("user logout")
         }

        return (
            <AuthContext.Provider 
            value={{users, 
            setUsers, 
            currentUser, 
            setCurrentUser,
            logOut,
             }} >
                {children}
            </AuthContext.Provider>
        )
    }