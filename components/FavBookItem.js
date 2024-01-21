import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
const FavBookItem = (props) => {
    //onPress={props.onViewDetail}
    return (
        <TouchableOpacity style={styles.screen} onPress={props.onViewDetail}>
          
            <View style={styles.container}>
                <View style={styles.imageNameContainer}>
                    <Image source={{ uri: props.image }} style={styles.image} />
                    <View>
                        <Text style={styles.text}>{props.title}</Text>
                        <Text style={styles.text}>{props.author}</Text>
                        <Text style={styles.text}>Size:{props.size}</Text>
                        
                    </View>
                    <Ionicons name="ios-chevron-forward-sharp" size={24} color={colors.white}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: colors.primary,
        marginTop:20,
       
    },
    container:{
        width:'100%',
        alignItems:'center',
       
    },
    image: {
        width: 110,
        height: 110,
    },
    text: {
        color: 'white',
        marginLeft:10,
        marginTop:5,
        width:200,
        fontFamily: 'roboto'
    },
    imageNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'90%',
        backgroundColor:'#303a52',
       
    }

})
export default FavBookItem;