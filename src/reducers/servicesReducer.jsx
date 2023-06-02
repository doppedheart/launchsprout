import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN
} from '../actions'

const services_reducer = (state,action)=>{
    if(action.type===SIDEBAR_OPEN){
        return {...state,isSidebarOpen:true};
    }
    if(action.type===SIDEBAR_CLOSE){
        return {...state,isSidebarOpen:false};
    }
    return {...state};
}


export default services_reducer