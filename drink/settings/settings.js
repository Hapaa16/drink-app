import React, {useState, useEffect, Children} from 'react';
import { Text, View, Image, TouchableOpacity, Button, Switch, Modal, Platform, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Svg, { SvgProps, G, Path } from "react-native-svg"
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

import SmoothPicker from 'react-native-smooth-picker';
import {Picker} from '@react-native-picker/picker';


import {useFonts, Roboto_300Light, Roboto_300Light_Italic, Roboto_100Thin, Roboto_500Medium} from '@expo-google-fonts/roboto';

import { BlurView } from 'expo-blur';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import * as Notifications from 'expo-notifications';
var placener;
var placejin;
var placenas;
function Test() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
  const [tsag, setTsag] = useState("2");
  const [isOpen, setOpen] = useState(false);
       AsyncStorage.getAllKeys((err, keys) => {
         AsyncStorage.multiGet(keys, (error, stores) => {
           stores.map((result, i, store) => {

            console.log({ [store[i][0]]: store[i][1] });
            return true;
           });
         });
       });

  const something = async() => {
    let dundun = await AsyncStorage.getItem("notif");
    if(dundun !== null) {
      setTsag(dundun);
      console.log("dundun " + tsag);
    }
  }

  useEffect(() => {
    AsyncStorage.setItem("notif", tsag);
    something();
   
    //tsagnotif();
  }, [tsag])
  if(Platform.OS === "ios"){
    return (
      <View>

      <View style={{marginLeft: 50}}>
        <TouchableOpacity onPress={() => {
          setOpen(true);
        }}>
        <Text style={{color: "#1993D1", fontSize: 18,fontFamily: "Roboto_300Light"}}>{tsag}цаг</Text>
        </TouchableOpacity>
      </View>
  
      <Modal transparent={true} visible={isOpen} style={{flex:1}} animationType="slide">
      <TouchableWithoutFeedback onPress={() => {
        setOpen(false);
      }}>
    <BlurView intensity={10} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
  
        </BlurView>
        </TouchableWithoutFeedback>
      
      <View style={{justifyContent:'center',marginTop: 200,alignSelf:"center",width:250, height: 250, backgroundColor:'#FFF', borderRadius: 12, shadowColor:"black", shadowOpacity: 0.2, shadowRadius: 15}}> 
      <Picker
      selectedValue={tsag}
      style={{alignSelf:'center',height: 100, width: 100,color:"#1993D1", marginTop: -100,backgroundColor: "transparent"}}
      mode="dialog"
      onValueChange={(itemValue, itemIndex) =>
      setTsag(itemValue)
      }>
      <Picker.Item color="#1993D1" label="2цаг" value="2" />
      <Picker.Item color="#1993D1" label="4цаг" value="4" />
      <Picker.Item color="#1993D1" label="6цаг" value="6" />
      <Picker.Item color="#1993D1" label="8цаг" value="8" />
    </Picker>
    </View>
     
     
      
     
      </Modal>
      
    
      </View>
    
    )
  }
  else {
    return(
      <Picker
      selectedValue={tsag}
      style={{height: 50, width: 100, marginLeft: 45, color:"#1993D1", marginTop: -12, backgroundColor: "transparent"}}
      mode="dialog"
      onValueChange={(itemValue, itemIndex) => 
      setTsag(itemValue)}
      >
      <Picker.Item color="#1993D1" label="2цаг" value="2" />
      <Picker.Item color="#1993D1" label="4цаг" value="4" />
      <Picker.Item color="#1993D1" label="6цаг" value="6" />
      <Picker.Item color="#1993D1" label="8цаг" value="8" />
    </Picker>
    )
  }
}


function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
    const [isSwitch, setisSwitch] = useState(true);


    const medegdel = async () => {
      let sich = await AsyncStorage.getItem("medegdel");
      console.log(sich);
      try{
        if(sich === 'false') {
          console.log("nihahaha");
        }
        else if (sich === 'true') {

         console.log("true");
         
        }
      }
      catch(exception){
        
      }
    }
    useEffect(() => {
      medegdel();
      AsyncStorage.setItem("medegdel", JSON.stringify(isSwitch));
    }, [isSwitch])
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View style={{marginLeft: 35, marginTop: 50}}>
        <Text style={{color: "grey", fontSize: 18, fontFamily: "Roboto_300Light"}}>Мэдэгдэлийн тохиргоо</Text>
      </View>
      <View style={{marginLeft: 35, marginTop: 21, flexDirection: 'row'}}>
        <Text style={{fontSize: 18, width:212, height: 24, fontFamily: "Roboto_300Light"}}>Мэдэгдэл харуулах</Text>
        <Switch trackColor={{false: '#EFEFEF', true: '#1993D1'}} thumbColor={isSwitch ? 'white' : '#1993D1'} style={{marginLeft: 32.5}} value={isSwitch} onValueChange={async() => {
         if(!isSwitch){
          setisSwitch(true);
          await AsyncStorage.setItem("notif", JSON.stringify(isSwitch))
          console.log();
          }
          else {
            setisSwitch(false);
            await AsyncStorage.setItem("notif", JSON.stringify(isSwitch))
            await Notifications.cancelAllScheduledNotificationsAsync();
          }
        }}/>
      </View>
      <View style={{marginLeft: 35, marginTop: 21, flexDirection: 'row'}}>
        <Text style={{fontSize: 18, fontFamily: "Roboto_300Light"}}>Мэдэгдэлийн давтамж</Text>
        <Test />
      </View>
    </View>
  );
}

function SettingsScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
  const [namechange, setNamechange] = useState();
  const [agechange, setAgechange] = useState();
  const [weightchange, setweightchange] = useState();
  const changeName = async() => {
    await AsyncStorage.setItem("nameheseg", namechange);
  }

  const changeweight = async() =>{
    let weight;
    let age = await AsyncStorage.getItem("nasheseg");
    weight = weightchange;
    console.log(weight);
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
  }
  const [placener, setPlaceNer] = useState();
  const [placejin, setPlaceJin] = useState();
  const [placenas, setPlaceNas] = useState();
  const changeage = async() => {
    let weight = await AsyncStorage.getItem("jinheseg");
    let age;
    age = agechange;
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
  }
  useEffect(() => {
    const placeholders = async() => {
      let ner = await AsyncStorage.getItem("nameheseg");
      let jin = await AsyncStorage.getItem("jinheseg");
      let nas = await AsyncStorage.getItem("nasheseg");

      setPlaceNer(ner);
      setPlaceJin(jin);
      setPlaceNas(nas);
    }

    placeholders();
  }, [placener, placejin, placenas])
  return (
    <View style={{flex:1,backgroundColor: '#fff'}}>
      <View style={{marginLeft: 35, marginTop: 57}}>
      <Text style={{fontSize:18, color: '#A7A7A7', fontFamily: "Roboto_300Light"}}>
        Хувийн тохиргоо
      </Text>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 150, height: 22, fontFamily: "Roboto_300Light"}}>Нэр</Text>
        <TextInput onSubmitEditing={changeName} onChangeText={(text) => setNamechange(text)} maxLength={14} style={{fontFamily: "Roboto_300Light", color:"#1993D1",width:150, height:24, borderRadius:2, borderColor:"red", textAlign:"right", fontSize:18}} placeholderTextColor="#1993D1" placeholder={placener}/>
      </View>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 150, height: 22, fontFamily: "Roboto_300Light"}}>Жин</Text>
        <TextInput onSubmitEditing={changeweight} onChangeText={int => setweightchange(int)} keyboardType="numbers-and-punctuation" style={{fontFamily: "Roboto_300Light", color:"#1993D1", width:150, height:24, borderRadius:2, borderColor:"red", textAlign:"right", fontSize:18}} placeholderTextColor="#1993D1" placeholder={placejin}/>
      </View>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 150, height: 22, fontFamily: "Roboto_300Light"}}>Нас</Text>
        <TextInput onSubmitEditing={changeage} onChangeText={age => setAgechange(age)} keyboardType="number-pad" style={{fontFamily: "Roboto_300Light",color:"#1993D1", width:150, height:24, borderRadius:2, borderColor:"red", textAlign:"right", fontSize:18}} placeholderTextColor="#1993D1" placeholder={placenas}/>
      </View>
      </View>
    </View>
  );
}

function devter() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
  const [isSwitch, setisSwitch] = useState(false);
  const [isSwitchlang, setisSwitchlang] = useState(false);
    return(
      <View style={{flex:1, backgroundColor:"#FFF"}}>
        <View style={{marginLeft: 35, marginTop: 57}}>
      <Text style={{fontSize:18, color: '#A7A7A7', fontFamily: "Roboto_300Light"}}>
        Dark mode
      </Text>
      <View style={{flexDirection:'row', marginTop: 21}}>
        <Text style={{fontSize: 18,width: 212, height: 22, fontFamily: "Roboto_300Light"}}>Dark mode идэвхжүүлэх</Text>
        <Switch trackColor={{false: '#EFEFEF', true: '#1993D1'}} thumbColor={isSwitch ? 'white' : '#1993D1'} style={{marginLeft: 32.5}} value={isSwitch} onValueChange={() => {
          if(!isSwitch){
          setisSwitch(true);
          }
          else {
            setisSwitch(false);
          }
        }}/>
      </View>
      <View style={{flexDirection:'row', marginTop: 21}}>
        <Text style={{fontSize: 18,width: 212, height: 22, fontFamily: "Roboto_300Light"}}>Хэл солих</Text>

                <Switch trackColor={{false: '#EFEFEF', true: '#1993D1'}} thumbColor={isSwitchlang ? 'white' : '#1993D1'} style={{marginLeft: 32.5}} value={isSwitchlang} onValueChange={() => {
          if(!isSwitchlang){
          setisSwitchlang(true);
          console.log("true");
          }
          else {
            setisSwitchlang(false);
            console.log("false");
          }
        }}/>
      </View>
      </View>
    </View>
    )
}
function zurh() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
    return (
      <View style={{flex:1, backgroundColor: "#FFF"}}>
        <View style={{marginLeft: 35, marginTop: 57}}>
      <Text style={{fontSize:18, color: '#A7A7A7', fontFamily: "Roboto_300Light"}}>
        Бидний тухай
      </Text>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 212, height: 24, fontFamily: "Roboto_300Light"}}>Бидэнтэй холбогдох</Text>

        <View style={{marginLeft: 44}}>
        <FontAwesome5 name="facebook" size={24} color="#1993D1" />
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 212, height: 24, fontFamily: "Roboto_300Light"}}>Бидэнд үнэлгээ өгөх</Text>
        <Svg style={{marginLeft: 44}}
      data-name="_Glyphs / Tab Bar / Heart"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={21.913}
      viewBox="0 0 24 21.913"
    >
      <Path
        data-name="Icon"
        d="M12 21.913C34.628 6.679 19.717-5.654 12 2.7c-7.717-8.354-22.628 3.979 0 19.213z"
        fill="#F17D74"
      />
    </Svg>
        
      </View>
      <View style={{flexDirection:'row', marginTop: 17}}>
        <Text style={{fontSize: 18,width: 212, height: 24, fontFamily: "Roboto_300Light"}}>Найзуудаа хуваалцах</Text>
        <MaterialIcons style={{marginLeft: 44}} name="group" size={24} color="#6081C4" />
      </View>
      </View>
    </View>
    )
}
const Tab = createMaterialTopTabNavigator();
export default function Settings({navigation}) {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_100Thin,
    Roboto_500Medium
  });
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>

        <View style={{marginTop: 60}}>
            <Text style={{fontSize: 32, marginLeft: 30, fontFamily: "Roboto_500Medium"}}>Тохиргоо</Text>
        </View>
        <Tab.Navigator 
        tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        showLabel: false,
        showIcon: true,
        indicatorStyle: {backgroundColor: "transparent"},
        tabStyle: {marginTop: 12},
        style: {shadowColor: "transparent", elevation: 0},
        iconStyle: {width: 68, height: 68, backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: 14}
    }} 
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
            if(route.name === 'Home'){
                if(focused) {
                  
                  return (
                    <View style={{width:68, height: 68, backgroundColor:"#1993D1", alignItems: "center", justifyContent: "center", borderRadius: 14}}>
                          <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={25}
      viewBox="0 0 21 25"
      //{...props}
    >
      <G data-name="_Glyphs / Tab Bar / Activity">
        <Path
          data-name="Icon"
          d="M7.938 22.486v-.622h5v.622a2.5 2.5 0 11-5 0zm12.055-1.9c-.009 0-.015.005-.023.005H.977c-.011 0-.02-.005-.03-.005a.7.7 0 01-.18-.036.968.968 0 01-.767-.937.953.953 0 01.14-.477c.2-.463.892-.842 1.7-1.8a9.268 9.268 0 001.814-5.624s0-2.453.014-3.27a6.693 6.693 0 014.739-6.359h.039a5.683 5.683 0 01.579-.167V1.49a1.481 1.481 0 112.962 0v.44c.177.045.348.1.515.153h.049a6.693 6.693 0 014.734 6.357c.017.816.014 3.27.014 3.27a9.279 9.279 0 001.813 5.624c.659.777 1.232 1.172 1.537 1.54a.973.973 0 01-.625 1.722c-.012-.001-.024-.007-.031-.007z"
          fill="white"
        />
      </G>
    </Svg>
                    </View>
                  )
                }
                else {
                  return (
                    <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={21}
                    height={25}
                    viewBox="0 0 21 25"
                    //{...props}
                  >
                    <G data-name="_Glyphs / Tab Bar / Activity">
                      <Path
                        data-name="Icon"
                        d="M7.938 22.486v-.622h5v.622a2.5 2.5 0 11-5 0zm12.055-1.9c-.009 0-.015.005-.023.005H.977c-.011 0-.02-.005-.03-.005a.7.7 0 01-.18-.036.968.968 0 01-.767-.937.953.953 0 01.14-.477c.2-.463.892-.842 1.7-1.8a9.268 9.268 0 001.814-5.624s0-2.453.014-3.27a6.693 6.693 0 014.739-6.359h.039a5.683 5.683 0 01.579-.167V1.49a1.481 1.481 0 112.962 0v.44c.177.045.348.1.515.153h.049a6.693 6.693 0 014.734 6.357c.017.816.014 3.27.014 3.27a9.279 9.279 0 001.813 5.624c.659.777 1.232 1.172 1.537 1.54a.973.973 0 01-.625 1.722c-.012-.001-.024-.007-.031-.007z"
                        fill="#1993D1"
                      />
                    </G>
                  </Svg>
                  )
              }
            }
            else if (route.name === 'Settings') {
              if(focused){
                return (
                  <View style={{width:68, height: 68, backgroundColor:"#1993D1", alignItems: "center", justifyContent: "center", borderRadius: 14}}>
                    <Svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={23}
                              height={22.499}
                              viewBox="0 0 23 22.499"
                              >
                        <G data-name="_Glyphs / Tab Bar / Profile">
                <Path
                          data-name="Icon"
                          d="M21.1 17.989a12.614 12.614 0 00-3.558-1.342h.006c-.1-.022-.188-.04-.282-.059-.062-.013-.123-.027-.183-.038-.566-.116-1.012-.189-1.255-.268-.639-.211-1.327-.434-1.327-1.334s-.012-1.017.206-1.137a1.407 1.407 0 00.715-.868 21.165 21.165 0 01.285-2.158c.131-.189.366-.028.447-.454a7.066 7.066 0 01.155-.959 3.03 3.03 0 00.191-1.548c-.151-.316-.426-.151-.445-.347-.033-.319.553-3 .156-4.131a5.292 5.292 0 00-.7-1.253C15.222 1.052 13.23.494 12.731.28a4.143 4.143 0 00-2.962 0C8.772.787 8.5 1.469 8.084 1.735a2.42 2.42 0 00-1.278 1.611c-.4 1.134.19 3.812.158 4.131-.019.2-.295.031-.444.347A3.021 3.021 0 006.7 9.37a7.1 7.1 0 01.159.959c.078.426.313.265.445.454a21.165 21.165 0 01.285 2.158 1.4 1.4 0 00.715.868c.217.12.206.238.206 1.137s-.687 1.123-1.328 1.334A17.267 17.267 0 001.9 17.989C-.131 19.152 0 22.5 0 22.5h23s.134-3.348-1.894-4.511"
                          fill="white"
                  />
                  </G>
                </Svg>
                  </View>
                )
              }
              else {
                return (
                  <Svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={23}
                              height={22.499}
                              viewBox="0 0 23 22.499"
                              >
                        <G data-name="_Glyphs / Tab Bar / Profile">
                <Path
                          data-name="Icon"
                          d="M21.1 17.989a12.614 12.614 0 00-3.558-1.342h.006c-.1-.022-.188-.04-.282-.059-.062-.013-.123-.027-.183-.038-.566-.116-1.012-.189-1.255-.268-.639-.211-1.327-.434-1.327-1.334s-.012-1.017.206-1.137a1.407 1.407 0 00.715-.868 21.165 21.165 0 01.285-2.158c.131-.189.366-.028.447-.454a7.066 7.066 0 01.155-.959 3.03 3.03 0 00.191-1.548c-.151-.316-.426-.151-.445-.347-.033-.319.553-3 .156-4.131a5.292 5.292 0 00-.7-1.253C15.222 1.052 13.23.494 12.731.28a4.143 4.143 0 00-2.962 0C8.772.787 8.5 1.469 8.084 1.735a2.42 2.42 0 00-1.278 1.611c-.4 1.134.19 3.812.158 4.131-.019.2-.295.031-.444.347A3.021 3.021 0 006.7 9.37a7.1 7.1 0 01.159.959c.078.426.313.265.445.454a21.165 21.165 0 01.285 2.158 1.4 1.4 0 00.715.868c.217.12.206.238.206 1.137s-.687 1.123-1.328 1.334A17.267 17.267 0 001.9 17.989C-.131 19.152 0 22.5 0 22.5h23s.134-3.348-1.894-4.511"
                          fill="#1993D1"
                  />
                  </G>
                </Svg>
                )
              }
                
            }
            else if (route.name ==="Devter") {
                if(focused) {
                    
                    return (
                        <View style={{width: 68, height: 68, backgroundColor: "#1993D1", alignItems: "center", justifyContent: "center", borderRadius: 14}}>
                        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.001}
      height={21.002}
      viewBox="0 0 21.001 21.002"
    
    >
      <G data-name="_Glyphs / Tab Bar / Compose">
        <Path
          data-name="Icon"
          d="M15.5 21H3.494a3.971 3.971 0 01-2.1-.364 2.467 2.467 0 01-1.03-1.031A3.969 3.969 0 010 17.508V5.5a3.969 3.969 0 01.364-2.1 2.466 2.466 0 011.03-1.03 3.969 3.969 0 012.1-.37H15.5c.289 0 .541.007.769.023L5.721 12.557A5.91 5.91 0 017.3 13.705a5.882 5.882 0 011.147 1.573L18.974 4.729c.017.225.025.476.025.766v12.013a3.969 3.969 0 01-.365 2.1 2.471 2.471 0 01-1.034 1.03 3.966 3.966 0 01-2.1.362zM4.657 13.62l-.282.282a1.581 1.581 0 00-.367.69l-.6 3 3-.6a1.572 1.572 0 00.689-.367l.283-.283-.007-.022c0-.015-.01-.031-.015-.046a4.125 4.125 0 00-1.028-1.607 4.128 4.128 0 00-1.607-1.028l-.068-.022zm14.318-8.892a2.974 2.974 0 00-.341-1.33A2.466 2.466 0 0017.6 2.366a2.98 2.98 0 00-1.331-.342L17.747.553a1.91 1.91 0 012.694.006 1.908 1.908 0 01.007 2.694l-1.471 1.473z"
          fill="white"
        />
      </G>
    </Svg>
                        </View>
                    )
                }
                else {
                    return (
                      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.001}
      height={21.002}
      viewBox="0 0 21.001 21.002"
     
    >
      <G data-name="_Glyphs / Tab Bar / Compose">
        <Path
          data-name="Icon"
          d="M15.5 21H3.494a3.971 3.971 0 01-2.1-.364 2.467 2.467 0 01-1.03-1.031A3.969 3.969 0 010 17.508V5.5a3.969 3.969 0 01.364-2.1 2.466 2.466 0 011.03-1.03 3.969 3.969 0 012.1-.37H15.5c.289 0 .541.007.769.023L5.721 12.557A5.91 5.91 0 017.3 13.705a5.882 5.882 0 011.147 1.573L18.974 4.729c.017.225.025.476.025.766v12.013a3.969 3.969 0 01-.365 2.1 2.471 2.471 0 01-1.034 1.03 3.966 3.966 0 01-2.1.362zM4.657 13.62l-.282.282a1.581 1.581 0 00-.367.69l-.6 3 3-.6a1.572 1.572 0 00.689-.367l.283-.283-.007-.022c0-.015-.01-.031-.015-.046a4.125 4.125 0 00-1.028-1.607 4.128 4.128 0 00-1.607-1.028l-.068-.022zm14.318-8.892a2.974 2.974 0 00-.341-1.33A2.466 2.466 0 0017.6 2.366a2.98 2.98 0 00-1.331-.342L17.747.553a1.91 1.91 0 012.694.006 1.908 1.908 0 01.007 2.694l-1.471 1.473z"
          fill="#1993d1"
        />
      </G>
    </Svg>
                    )
                }
                
                
            }
            else if(route.name === "Zurh") {
                if(focused){
                  return (
                    <View style={{width: 68, height: 68, backgroundColor: "#1993D1", alignItems: "center", justifyContent: "center", borderRadius: 14}}>
                        <Svg
      data-name="_Glyphs / Tab Bar / Heart"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={21.913}
      viewBox="0 0 24 21.913"
     
    >
      <Path
        data-name="Icon"
        d="M12 21.913C34.628 6.679 19.717-5.654 12 2.7c-7.717-8.354-22.628 3.979 0 19.213z"
        fill="white"
      />
    </Svg>
                    </View>
                  )
                }
                else {
                  return (
                    <Svg
      data-name="_Glyphs / Tab Bar / Heart"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={21.913}
      viewBox="0 0 24 21.913"
  
    >
      <Path
        data-name="Icon"
        d="M12 21.913C34.628 6.679 19.717-5.654 12 2.7c-7.717-8.354-22.628 3.979 0 19.213z"
        fill="#1993d1"
      />
    </Svg>
                  )
                }
            }
        }
    })}>
      <Tab.Screen name = "Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name = "Devter" component={devter} />
      <Tab.Screen name = "Zurh" component={zurh} />
      
    </Tab.Navigator>
 
    </View>


    
  );
}
const styles = StyleSheet.create({
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})