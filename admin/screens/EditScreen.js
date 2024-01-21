import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Image, Button, YellowBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';
import * as bookActions from '../store/action/book'
const EditScreen = ({ navigation, route }) => {
    const { bookId } = route.params;
    const dispatch = useDispatch();
    let books = useSelector(state => state.book.books)
    const editedBook= books.find(book=>book.id===bookId)
    
    console.log(editedBook)
    const [title, settitle] = useState(editedBook?editedBook.title:"")
    const [author, setauthor] = useState(editedBook?editedBook.title:"")
    const [imgUrl, setimgUrl] = useState(editedBook?editedBook.image:'')
    const [size, setsize] = useState(editedBook?editedBook.size:'')

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            let image = result.uri
            let filename = image.substring(image.lastIndexOf('/') + 1)
            const uploadUrl = await uploadImageAsync(image, filename);
            setimgUrl(uploadUrl)


        }
    }
    async function uploadImageAsync(uri, filename) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const ref = storage.ref().child(`image/${filename}`);
        const snapshot = await ref.put(blob);

        // We're done with the blob, close and release it
        blob.close();

        return await snapshot.ref.getDownloadURL();
    }

    const submitHandler =() => {
        
        dispatch(bookActions.createBook(title,author,imgUrl,size))
        alert("success")
    }
    

    return (

        <View style={styles.form}>
            <Text style={styles.text}>Title</Text>
            <TextInput
                placeholder="Enter title here"
                style={styles.input}
                value={title}
                onChangeText={(value) => {
                    settitle(value)
                }}
            />
            <Text style={styles.text}>Image</Text>
            <Text style={styles.text}>Author</Text>
            <TextInput
                placeholder="Enter Large Size Price here"
                style={styles.input}
                value={author}
                
                onChangeText={(value) => {
                    setauthor(value)
                }}
            />
            <Text style={styles.text}>size</Text>
            <TextInput
                placeholder="Enter Medium Size Price here"
                style={styles.input}
                value={size}
                onChangeText={(value) => {
                    setsize(value)
                }}
            />
            <Button title="submit" onPress={submitHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor:'pink',
        marginTop: 0,
        padding: 10
    },
    text: {
        marginLeft: 5,
        marginTop: 16,
        fontFamily: 'firacode',
        fontWeight: 'bold'
    },
    pick: {
        width: 116,
        margin: 5,
        marginLeft: 1,
        marginTop: 25,
        backgroundColor:'pink',
        height: 52,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        color:'pink',
        alignItems: 'center'

    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


export default EditScreen;