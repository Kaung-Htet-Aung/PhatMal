import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import * as favActions from '../store/action/favourite'
const DetailScreen = ({ navigation, route }) => {
    const { bookId, title } = route.params;
    const selectedBook = useSelector(state => state.book.books.find(book => book.id === bookId));
    const favbooks = useSelector(state => state.favourite.favbook);
    const book = favbooks.find(book => book.id == selectedBook.id)
    const dispatch = useDispatch();
    const [isBook, setisBook] = useState(book)
    useEffect(() => {
        navigation.setOptions({
            title: title
        })
    }, [navigation, title])
    return (
        
        <ScrollView style={styles.screen}>
            <View style={styles.itemContainer}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{ uri: selectedBook.image }} />
                    <View style={styles.detail}>
                        <Text style={styles.text}>title:{selectedBook.title}</Text>
                        <Text style={styles.text}>author:{selectedBook.author}</Text>
                        <Text style={styles.text}>size:{selectedBook.size}</Text>
                        <View style={styles.starContainer}>
                            <FontAwesome name="star" size={13} color={colors.green} />
                            <FontAwesome name="star" size={13} color={colors.green} />
                            <FontAwesome name="star" size={13} color={colors.green} />
                            <FontAwesome name="star" size={13} color={colors.green} />
                            <FontAwesome name="star-half-full" size={14} color={colors.green} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <View style={styles.about}>
                    <Text style={styles.title}>About</Text>
                    <Text style={styles.review}>
                        မြန်မာဘာသာစကားသည် မြန်မာနိုင်ငံ၏ ရု
                        ံးသုံးဘာသာစကားဖြစ်သည်။ဗမာလူမျိုးနှင့်ဗမာနွယ်ဝင်(ဓနု၊အင်းသား၊တောင်ရိုးနှင့်ယော)
                        တို့၏ဇာတိစကားဖြစ်သည်။ဗမာလူမျိုးတို့သည် တိဘက်-ဗမာနွယ် ဘာသာစကားများ 
                        (Tibeto-Burman Languages)ပြောဆိုသည့် လူမျိုးနွယ်စုကြီးမှ အကြီးဆုံးသော လူမျိုးဖြစ်သည်။ 
                        လူဦးရေ ၃၆သန်းခန့်သည် မြန်မာဘာသာစကားကို မိခင်ဘာသာစကားအနေဖြင့် သုံး၍ မြန်မာတိုင်းရင်သားများသည်
                         ဒုတိယဘာသာစကား အနေဖြင့် သုံးသည်။
                    </Text>
                </View>
            </View>

        </ScrollView>
    )

}


const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: colors.primary,
        height: '100%'
    },
    item: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#303a52',
        height: '100%',
        borderRadius: 15,
        paddingLeft: '6%'
    },
    itemContainer: {
        alignItems: 'center',
        height: '40%'
    },
    image: {
        marginTop: '8%',
        width: '35%',
        height: '70%',

    },
    detail: {
        paddingTop: 40,
        paddingLeft: '10%'
    },
    starContainer: {
        flexDirection: 'row',
        paddingTop: '10%'
    },
    text: {
        color: 'white',
        fontFamily: 'roboto',
        paddingTop: 10
    },
    aboutContainer: {
        alignItems: 'center',
    },
    about: {
        width: '90%',
        height:400
    },
    title: {
        color: colors.green,
        fontFamily: 'roboto',
        fontSize: 25,
        marginTop: '5%'
    },
    review:{
        color:'white',
        paddingTop:10,
        paddingLeft:10,
        fontSize:15,
        paddingBottom:20
    },
   
})
export default DetailScreen;