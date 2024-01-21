import React from 'react'
import { View,Text, Image,StyleSheet } from 'react-native'

const TopSection = () => {
    return (
        <View style={styles.imgContainer}>
            <Image source={require('../Image/design.png')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        marginTop: 20,
        width: '92%',
        height: 130,
        borderRadius: 7,
    },
    imgContainer: {
        alignItems: 'center'
    }
})
export default TopSection;