import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import {FontAwesome} from '@expo/vector-icons'
import { useSelector } from 'react-redux'
const BookItem = (props) => {
    const theme= useSelector(state=>state.theme.isEnabled)
    return (
        <TouchableOpacity style={styles.screen} onPress={props.onViewDetail}>
            <View style={styles.item}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: props.image }}
                    />
                </View>

                <Text style={{color:theme?'gray':colors.white}}>{props.title}</Text>
                <Text style={{color:theme?'gray':colors.white}}>{props.author}</Text>
                 <View style={styles.starContainer}>
                   <FontAwesome name="star" size={13} color={colors.green} />
                   <FontAwesome name="star" size={13} color={colors.green} />
                   <FontAwesome name="star" size={13} color={colors.green}/>
                   <FontAwesome name="star" size={13} color={colors.green} />
                   <FontAwesome name="star-half-full" size={14} color={colors.green} />
                </View>
            </View>


        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        height: 175,
        paddingTop: 20,
        
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius:5
    },
    item: {
        width: 110,      
    },
   
    starContainer:{
        flexDirection:'row'
    }

});

export default BookItem;