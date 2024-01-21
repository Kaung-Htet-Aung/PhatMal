export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE'

export const addToFavourite=(book)=>{
    return{
        type:ADD_TO_FAVOURITE,
        favbook:book
    }
}
export const removeFromFavourite=(bookId)=>{
    return{
        type:REMOVE_FROM_FAVOURITE,
        bookId
    }
}