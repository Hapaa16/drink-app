import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-community/async-storage';
import AppLoading from 'expo-app-loading';
import {useFonts, Roboto_300Light, Roboto_300Light_Italic, Roboto_100Thin} from '@expo-google-fonts/roboto';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import { BlurView } from 'expo-blur';

export default function Login({navigation}) {
    const [name, setName] = useState();
    const [nas, setNas] = useState();
    const [jin, setJin] = useState();
    const [modelOpen, setModelOpen] = useState(false);
    const [jinCheck, setJinCheck] = useState(false);
    let [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_100Thin
      });
     if (!fontsLoaded) {
         return <AppLoading />;
     }

     const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const nerSave = async() => {
        try {
            if(!name){
                alert("neree oruul sda !");
                return
            }
            if(!jin){
                alert("jingee oruulach sda !");
                return
            }
            if(!nas){
                alert("nasaa oruulach sda !");
                return
            }
            if(parseInt(jin) <= 400) {

            
            await AsyncStorage.setItem("nameheseg", name)
            await AsyncStorage.setItem("nasheseg", nas)
            await AsyncStorage.setItem("jinheseg", jin)
          
            let age = await AsyncStorage.getItem("nasheseg");
            let weight = await AsyncStorage.getItem("jinheseg");
         
                age = parseInt(age);
                weight = parseInt(weight);
                if(age < 30 ){
                        weight = weight * 40/28.3*29
                        weight = Math.trunc(weight);
                        weight = weight.toString(10);
            
                            
                        }
                        else if(age < 55 && age >= 30 ){
                            weight = weight * 35/28.3*29
                            weight = Math.trunc(weight)
                            weight = weight.toString(10);
                
                            
                        }
                        else {
                            weight = weight * 30/28.3*29
                            weight = Math.trunc(weight);
                            weight = weight.toString(10);
            
                    }
          
                        await AsyncStorage.setItem("usuuh", weight);
                        await AsyncStorage.setItem("defusuult", weight);
                        console.log("sda "+weight);
                 
                    
            
            
            navigation.navigate("Main");
                }
                else {
                    setJinCheck(true);
                    wait(3000).then(() => setJinCheck(false));
                }
        }
    
        catch(err){
            alert(err)
        }
    }
    return (
        <SafeAreaView style={{flex: 1
            
        }}>
        <View style={styles.container}>
            
             <Modal transparent={true} visible={modelOpen} animationType="slide" style={{flex: 1}} >
            <TouchableWithoutFeedback onPress={() => {
                   setModelOpen(false);
               }}>
                 <BlurView intensity={90} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                <View style={styles.popup}>
                    <Text style={styles.popuptxt}>*Биеийн жин болон насны мэдээлэл дээр тулгуурлан хүний өдөрт уух усны хэмжээг тооцоолдог болно.</Text>
                </View>
                </BlurView>
            </TouchableWithoutFeedback>
            </Modal>

            <Image style={styles.imagelogo} source={require('../images/reallogo.png')} />
            
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
               
            <View style={styles.container2}>
                <Text style={styles.tavtaimoriltxt}>Тавтай морил</Text>
                <View style={{width: 310}} label>
                <FloatingLabelInput value={name} maxLength = {20}
                 inputStyles={{paddingLeft: 20, color: "black", textDecorationLine:"none", fontFamily: "Roboto_300Light"}} label={"Таны нэр"} staticLabel customLabelStyles={{colorFocused: 'grey',fontSizeFocused: 12, colorBlurred:"#1993D1"}} labelStyles={{backgroundColor: '#fff',paddingHorizontal: 5, fontFamily: 'Roboto_300Light'}} containerStyles={styles.textinput} onChangeText={text => setName(text)}/>
                </View>
                <View style={styles.nasjin}>
                <View style={{flex:0.5, flexDirection: 'row', alignItems: "baseline"}}>
                <FloatingLabelInput maxLength={3} value={jin} containerStyles={styles.jinnas2} label={'Жин'} keyboardType="number-pad" onChangeText={int => setJin(int)} customLabelStyles={{colorBlurred: "#1993D1", topFocused: -20}} labelStyles={{fontFamily: 'Roboto_300Light'}}/> 
                <FloatingLabelInput maxLength={2} value={nas} label={'Нас'} keyboardType="number-pad" onChangeText={int => setNas(int)} containerStyles={styles.jinnas} customLabelStyles={{colorBlurred: "#1993D1", topFocused: -20}} labelStyles={{fontFamily: 'Roboto_300Light'}}/>
                   
                </View>
                </View>
                <TouchableOpacity style={{flexDirection:"row-reverse", marginLeft: "12%", marginTop: "10%"}} onPress={() => setModelOpen(true)}>
                    <Text style={{fontSize: 12, color: "#CE7171", fontFamily:"Roboto_300Light"}}>Яагаад эдгээрийг асууж байна вэ? </Text>
                </TouchableOpacity>
 
                <TouchableOpacity style={{flexDirection:"row-reverse", marginLeft: "12%", marginTop: 116}} onPress={() => nerSave() }>
                    <View style={{backgroundColor: "#1993D1", borderRadius: 21, paddingVertical: 10, paddingHorizontal: 20}}>
                        <Text style={{fontSize: 18, color: "#fff", fontFamily: "Roboto_300Light", elevation: 2}}>Үргэлжлүүлэх</Text>
                    </View>
                </TouchableOpacity>
                
                
                
            </View>
            </TouchableWithoutFeedback>
            <Modal transparent={true} visible={jinCheck} style={{flex: 1, alignSelf:"center"}} animationType="fade">
                
           
                <View style={{width: 286, height: 56,  alignSelf:"center", alignItems: "center", justifyContent:"center", marginTop: 30, borderRadius: 6, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,}}>
                    <Text style={{color : '#CE7171'}}>You targan ass</Text>
                </View>
          
            </Modal>
            
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    nasjin: {
        marginTop: 22,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "13%"
    },
    jinnas: {
        width: 85,
        height: 38,
        borderWidth:0,
        borderBottomWidth: 1,
        borderBottomColor: "#1993D1"
    },
    jinnas2: {
        width: 141,
        height: 38,
        borderBottomWidth: 1,
        borderBottomColor: "#1993D1"
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container2: {
        marginTop: 36,
        marginLeft: 27,
        alignItems: "stretch",

    },

    textinput: {
        borderRadius: 7,
        borderWidth: 1,
        width: 303,
        height: 50,
        borderColor: "#1993D1",
    },
    button: {
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: '#575dd9',
    },
    imagelogo: {
        marginTop: 118,
        alignSelf: "center",
        width: 110,
        height: 44

    },
    tavtaimoriltxt: {
        fontSize: 30,
        fontFamily: 'Roboto_300Light',
        marginBottom: 32,
    },
    label: {
        marginLeft: "2%", 
        marginBottom: 9, 
        marginTop: 18,
        fontSize: 12,
        color: "#1993D1",
        fontFamily: "Roboto_300Light"

    },
    popup: {
    
        width: 320,
        height: 160,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#4195CC",
        justifyContent: "center",
        borderRadius: 6,
        elevation: 2,

        
    },
    popuptxt: {
        color: "#fff",
        alignSelf: "center",
        fontSize: 15,
        textAlign: "center",
        paddingLeft: 35,
        paddingRight: 35,
        fontFamily: "Roboto_300Light"
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    }

})