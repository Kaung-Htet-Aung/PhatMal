export const CREATE_BOOK='CREATE_BOOK'
export const SET_BOOK='SET_BOOK'
export const DELETE_BOOK='DELETE_BOOK'
import Book from "../../models/Book"
export const createBook = (title, author, image, size) => {
    return async dispatch => {
        const response = await fetch('https://bookshelf-d5d29-default-rtdb.firebaseio.com/books.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                image,
                size
            })
        });
        if(!response.ok){
             throw new Error("Something went wrong!")
        }
        let resData = await response.json();
        console.log(resData);
        dispatch({
            type: 'CREATE_BOOK',
            book: {
                id: resData.name,
                title,
                author,
                image,
                size
            }
        })
    }
}

export const fetchBook = () => {
    return async dispatch => {
        const response = await fetch('https://bookshelf-d5d29-default-rtdb.firebaseio.com/books.json', {

        })
        const resData = await response.json();
        console.log(resData);
        let loadedBooks=[]
        
        for(const key in resData){
            loadedBooks.push(
                new Book(
                    key,
                    resData[key].title,
                    resData[key].author,
                    resData[key].image,
                    resData[key].size,
                )
            )
        }
        dispatch({
            type: SET_BOOK,
            books: loadedBooks
        })
        
    }
}
export const deleteBook = (bookId) => {
    return async dispatch => {
        await fetch(`https://bookshelf-d5d29-default-rtdb.firebaseio.com/books/${bookId}.json`,
            {
                method: 'DELETE',

            })
        dispatch(
            { type: DELETE_BOOK, bookId }
        )
    }
}