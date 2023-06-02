import React ,{createContext, useContext,useReducer} from 'react'
import reducer from '../reducers/servicesReducer'
import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN
} from '../actions'

const initialState ={
    isSidebarOpen:false,
}

const ServicesContext =createContext();

export const ServicesProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const openSidebar=()=>{
        dispatch({type:SIDEBAR_OPEN})

    }
    const closeSidebar = ()=>{
        dispatch({type:SIDEBAR_CLOSE});

    }
    return <ServicesContext.Provider value={{...state,openSidebar,closeSidebar}}>
        {children}
    </ServicesContext.Provider>
}

export const useServicesContext = ()=>{
    return useContext(ServicesContext);
}