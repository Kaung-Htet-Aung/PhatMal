import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, FlatList,Switch } from 'react-native'
import { useSelector } from 'react-redux'
import BookItem from '../components/BookItem'
import TopSection from '../components/TopSection'
import colors from '../constants/colors'
const ForYouScreen = (props) => {
    const books = useSelector(state => state.book.books)
    const theme= useSelector(state=>state.theme.isEnabled)
    
    return (

        <SafeAreaView style={{backgroundColor:theme?colors.white:colors.primary, width:'100%'}}>

            <StatusBar barStyle={theme? "dark-content":"light-content"} backgroundColor={theme?colors.white:colors.primary} />
            
            <View style={styles.itemContainer}>
                <FlatList data={books}
                    ListHeaderComponent={<TopSection />}
                    scrollEnabled={true}
                    numColumns={3}
                    columnWrapperStyle={styles.itemRow}
                    keyExtractor={(item) => item.id}
                    renderItem={itemData =>
                        <BookItem image={itemData.item.image} title={itemData.item.title} author={itemData.item.author}
                            onViewDetail={() => {
                                props.navigation.navigate('Detail',
                                    {
                                        bookId: itemData.item.id,
                                        title:itemData.item.title
                                    }
                                )
                            }
                            }
                        />
                    }
                />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
   
    itemRow: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
})
export default ForYouScreen;