import React from "react";
import { Route,Routes,  Navigate, Outlet } from "react-router-dom";

export function IsUserRedirect({user, loggedInPath, children,component, ...rest}) {
    
    return(
        // <Route 
        // {...rest}
        // element={component}
        // render={() => {
        //     if (!user) {
        //         return children
        //     }

        //     if(user) {
        //         return(
        //             < Navigate
        //             to={{
        //                 pathName: loggedInPath,
        //             }}
        //             />
        //         )
        //     }
        //     return null
        // }}
        // />
        user? <Outlet/> : <Navigate to="/signin"/>
    )
}

export function ProtectedRoute({user, children, ...rest}) {
    return(
        // <Route 
        // {...rest}
        // render={({location}) => {
        //     if(user) {
        //         return children
        //     }

        //     if(!user) {
        //         return (
        //             <Navigate
        //             to={{
        //                 pathname: 'signin',
        //                 state: {from: location}
        //             }}
        //             />
        //         )
        //     }
        //     return null
        // }}
        // />
        user? <Outlet/> : <Navigate to="/signin"/>
    )
}