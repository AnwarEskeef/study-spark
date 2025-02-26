
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookie from 'cookie-universal';

import LoadingPage from "../Components/LoadingPage";
import { ReadCookieValue } from "../components/ReadCookieValue";

export const User = createContext();
export  function ContextApp( { children } )
{
    const [auth, set_auth] = useState({
        username: '',
        user_id : '',
        access_token: '',
        first_name :'',
        last_name: '',
    });

    useEffect(() => {

        if (!ReadCookieValue('refresh_token')) // here the current user is just a guest
            return;

        axios.post(url, obj).then(res => {

            set_auth(dd);
        
        }).catch(err => {
                console.log('here is the error in context', err);
               set_auth({});
            
                let cookie = new Cookie();
                cookie.removeAll();
            });
			
    },[])
    

    if ( ReadCookieValue('refresh_token'))
    {
        // there is a refresh token , but the user info did not come from the backend yet 

        if (auth.user_id <= 0)
           return <LoadingPage/>

        else 
        return <User.Provider value={[auth ,set_auth]} >
               {children}
             </User.Provider>
    }
    
    else 
    return <User.Provider value={[auth ,set_auth]} >
        {children}
       </User.Provider>

}

