import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import FavBookItem from '../components/FavBookItem';
import colors from '../constants/colors';
const FavouriteScreen = (props) => {
    const favbooks = useSelector(state => state.favourite.favbook);

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>My Favourite Books</Text>
            <FlatList
                data={favbooks}
                keyExtractor={item => item.id}
                renderItem={itemData =>
                    <FavBookItem
                        title={itemData.item.title}
                        author={itemData.item.author}
                        image={itemData.item.image}
                        size={itemData.item.size}
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
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: colors.primary,
        height: '100%',
        paddingBottom: 20,
    },
    text: {
        color: colors.white,
        fontFamily: 'roboto',
        marginLeft: 20,
        fontSize: 20,
        paddingTop: 10,
    }
})
export default FavouriteScreen;