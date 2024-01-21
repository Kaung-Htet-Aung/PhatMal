import Books from '../../data/book'
import SET_BOOK from '../action/book'
let initailState={
    books:Books
}


export default (state=initailState,action)=>{

     switch(action.type){
         case SET_BOOK:return{
             ...state
         }
     }
     return state;
}