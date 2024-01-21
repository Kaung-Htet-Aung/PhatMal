import React,{useEffect}from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import AuthorBookItem from '../components/AuthorBookItem';
import colors from '../constants/colors';
const AuthorBookScreen = ({ navigation, route }) => {
    const { name } = route.params;
    let authorName = name.trim()
    const selectedAuthor = useSelector(state => state.book.books.filter(book => book.author === authorName))
    useEffect(() => {
        navigation.setOptions({
            title:name
        })
    }, [navigation,name])
    return (
        <View style={styles.screen}>
            <FlatList
                data={selectedAuthor}
                keyExtractor={item => item.id}
                renderItem={(itemData) =>
                    <AuthorBookItem title={itemData.item.title} author={itemData.item.author} image={itemData.item.image} size={itemData.item.size}
                        onViewDetail={() => {
                            navigation.navigate('Detail',
                                {
                                    bookId:itemData.item.id
                                }
                            )
                        }}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: colors.primary,
        paddingBottom: 20,

    },

})
export default AuthorBookScreen;