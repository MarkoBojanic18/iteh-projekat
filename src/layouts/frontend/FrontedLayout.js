import React from "react";
import Navbar from "./Navbar.js";
import publicRoutesList from '../../routes/PublicRouteList.js';
import { Switch,Route } from "react-router-dom";




const  FrontedLayout= ()=>{

    return (
        <div >
            <Navbar />
            

                <div >
                    
                        <Switch>
                            {publicRoutesList.map((routedata,idx)=>{
                                    return(
                                        routedata.component && (
                                            <Route 
                                                key = {idx}
                                                path = {routedata.path}
                                                exact = {routedata.exact}
                                                name = {routedata.name}
                                                render = {(props)=>(
                                                    <routedata.component {...props} />
                                                )}
                                            />

                                           
                                        )
                                    )
                            })}
                        </Switch>
                

                   
                </div>
            </div>
        
    );

}

export default FrontedLayout;