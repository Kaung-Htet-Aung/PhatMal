import React, { useEffect } from 'react'
import { View, FlatList, StyleSheet, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
import BookItem from '../components/BookItem';
import * as bookActions from '../store/action/book'

const BookScreen = (props) => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.book.books)
    useEffect(() => {
        dispatch(bookActions.fetchBook())
    }, [dispatch])

    let html='<h1><center>Hello webview</center></h1>';
    return (
          
            <WebView
                style={styles.container}
                originWhitelist={['*']}
                source={{ html:html }}
            />
    );
    /* return (
        <View style={styles.screen}>
           
            export default function App() {
              
            }

            const styles = StyleSheet.create({ ... }); 

            <FlatList
                data={books}
                ListHeaderComponent={<Button title="Add New Product" onPress={() => {
                    props.navigation.navigate('EditBook',
                        {
                            bookId: 'b1'
                        }
                    )
                }} />}
                keyExtractor={item => item.id}
                renderItem={(itemData) =>
                    <BookItem
                        image={itemData.item.image}
                        title={itemData.item.title}
                        author={itemData.item.author}
                        onEdit={() => {
                            props.navigation.navigate('EditBook',
                                {
                                    bookId: itemData.item.id
                                }
                            )
                        }}
                        onDelete={()=>{
                            dispatch(bookActions.deleteBook(itemData.item.id))
                        }}
                    />
                }
            />

        </View>
    ); */
}

const styles = StyleSheet.create({

})
export default BookScreen;
