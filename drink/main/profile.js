import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import image from './image.json';
import AsyncStorage from '@react-native-community/async-storage';
function Profilescene({props, navigation}) {
    const [image1, setImage] = useState(null);
    
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
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
        if (!result.cancelled) {
          setImage(result.uri);
          await AsyncStorage.setItem("pro", result.uri);
        }
      };
    const removeImage = async() => {
        setImage(image.image);
        await AsyncStorage.setItem("pro", image.image);
    }
    const imageView = async() => {
      let imagedb = await AsyncStorage.getItem("pro");
      if (imagedb !== null) {
        setImage(imagedb);
      }
      if (imagedb === null) {
        setImage(image.image);
      }
    }
    useEffect(() => {
      imageView();
    }, [image1])

    return (

       
                <TouchableOpacity style={styles.container} onPress={() => {
        navigation.navigate("Main"); 
      }}>
        {image1 && <Image source={{ uri: image1 }} style={{ width: 210, height: 210, borderRadius: 14 }} />}
        <View style={{flexDirection: "row", marginTop: 11}}>
        <TouchableOpacity onPress={pickImage}>
        <View style={styles.zuraginput}>
            <Text style={{alignSelf: "center", color: "white"}}>Зураг оруулах</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeImage}>
        <View style={styles.zuragustgah}>
            <Text style={{alignSelf: "center", color: "white"}}>Устгах</Text>
        </View>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
       

    );
}
const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: "center",
        justifyContent :"center"
    },
    zuraginput: {
        width: 122,
        height: 47,
        backgroundColor: "#1993D1",
        borderRadius:14,
        justifyContent: "center"
    },
    zuragustgah: {
        width:98,
        height:47,
        borderRadius: 14,
        backgroundColor: "#9C9C9C",
        justifyContent: "center"
    }
})
export default Profilescene;