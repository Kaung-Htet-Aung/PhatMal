import { SET_ENABLE } from "../action/theme";

const initialState={
   isEnabled:false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_ENABLE: return{
            ...state,
            isEnabled:action.isEnabled
        }
    }

    return state;
}