import { ADD_TO_FAVOURITE } from "../action/favourite";
import { REMOVE_FROM_FAVOURITE } from "../action/favourite";
const initialState={
   favbook:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_FAVOURITE: return{
            ...state,
           favbook:state.favbook.concat(action.favbook)
        }
        case REMOVE_FROM_FAVOURITE:
            return{
                ...state,
                favbook:state.favbook.filter(book=>book.id!==action.bookId)
            }
    }

    return state;
}