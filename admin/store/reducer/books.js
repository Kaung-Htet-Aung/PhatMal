import { CREATE_BOOK } from "../action/book";
import { DELETE_BOOK } from "../action/book";
import { BOOKS } from "../../data/dummy-data";
import { SET_BOOK } from "../action/book";
import Book from "../../models/Book";
const initialState = {
    books: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOK:{
           return{
               ...state,
               books:action.books
           }
        }
        case CREATE_BOOK: {
            const newBook= new Book(
                action.book.id,
                action.book.title,
                action.author,
                action.image,
                action.size
            )

           return{
               ...state,
               books:state.books.concat(newBook)
            }
        }
        case DELETE_BOOK:{
            return{
                ...state,
                books:state.books.filter(book=>book.id!==action.bookId)
            }
        }
          
    }

    return state;
}