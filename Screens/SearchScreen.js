import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native'

import FoundBookItem from '../components/FoundBookItem';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
const SearchScreen = (props) => {
    const books = useSelector(state => state.book.books);
    const [foundbooks, setfoundbooks] = useState([])
    const searchBook = (text) => {
        let enterText = text.toLowerCase().toLowerCase().split(' ').join('').trim();
        if (text !== "") {
            const foundBook = books.filter(book => book.title.toLowerCase().split(' ').join('').trim().indexOf(enterText) > -1)
            setfoundbooks(foundBook)
        } else {
            setfoundbooks([])
        }

    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="Search By Book Title"
                    placeholderTextColor="white"
                    onChangeText={text => {
                        searchBook(text)
                    }}

                />
                <FontAwesome name="search" size={24} color="white" style={{ position: 'absolute', marginLeft: 4, }} />
            </View>
            {foundbooks.length <= 0 && (<View style={styles.nofound}>
                <Text style={styles.text}>Oops! No Results Found</Text>
            </View>)}
            {foundbooks.length > 0 && (<View style={styles.bookItem}>
                <FlatList
                    data={foundbooks}
                    keyExtractor={item => item.id}
                    renderItem={(itemData =>

                        <FoundBookItem
                            author={itemData.item.author}
                            image={itemData.item.image}
                            size={itemData.item.size}
                            title={itemData.item.title}
                            onViewDetail={() => {
                                props.navigation.navigate('Detail',
                                    {
                                        bookId: itemData.item.id,
                                        title: itemData.item.title
                                    }
                                )
                            }
                            }
                        />

                    )}
                />
            </View>)}
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: colors.primary,
        height: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderColor: colors.white,
        borderWidth: 1,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        color: 'white',
        textAlign: 'right',
        fontFamily: 'roboto'

    },
    bookItem: {
        width: '98%'
    },
    text: {
        color: 'white',
        fontFamily: 'roboto',
        fontSize: 20,
    },
    nofound: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default SearchScreen;