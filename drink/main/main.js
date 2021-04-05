import React, {useRef, useState, useEffect, Component, useCallback} from 'react';
import {LogBox,Text, View, StyleSheet, Image, Animated, Dimensions, Button, TouchableWithoutFeedback, TouchableOpacity, Modal, InteractionManager, ScrollView, RefreshControl, Platform, AppState} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { and } from 'react-native-reanimated';
import Login from '../login/login';
import ProgressMain from '../main/progress';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { BlurView } from 'expo-blur';
import { TextInput } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Progress from 'react-native-progress';
import { shouldUseActivityState } from 'react-native-screens';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import ProgressCircle from 'react-native-progress-circle';
import { NavigationContainer, useIsFocused  } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Settings from '../settings/settings'
import Svg, { SvgProps, G, Path, Circle} from "react-native-svg"
import Badge from '../settings/badge'
import useStateWithCallback, { useStateWithCallbackInstant } from 'use-state-with-callback';
import image from './image.json'
import {useFonts, Roboto_300Light, Roboto_300Light_Italic, Roboto_100Thin,Roboto_400Regular} from '@expo-google-fonts/roboto';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Entypo, Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
var place;
var ijj = 0;
function Main({props, navigation}) {
    // AsyncStorage.getAllKeys((err, keys) => {
    //     AsyncStorage.multiGet(keys, (error, stores) => {
    //       stores.map((result, i, store) => {
    //         console.log({ [store[i][0]]: store[i][1] });
    //         return true;
    //       });
    //     });
    //   });
    //const isFocused = useIsFocused();

  
  
    let [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_100Thin,
        Roboto_400Regular
      });
    //  if (!fontsLoaded) {
    //      return <AppLoading />;
    //  }
    const defayga = 220;
    const [lolfuck, setLolFuck] = useState(0, lolfuck => {
        if(lolfuck > 0) {
            drink();
        }
    });
    const [defuuh, setDefuuh] = useState();
    const [uscalc, setusCalc] = useState();
    const [fuck, setFuck] = useState();
    const [index, setIndex] = useState(0);
    const [modal, setModelOpen] = useState(false);
    const [ayga, setAyga] = useState(1);
    const [hmm, setHmm] = useState(false);
    const [pro, setPro] = useState(null);
    const [name, setName] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [niitGudarsan, setNiitGudarsan] = useState('0');
    const isFocused = useIsFocused();
    const [test, setTest] = useState();
    const [percentage, setPercentage] = useState(0);
    const [uujDuussan, setUujDuussan] = useState(false);
    const [profilePopUp, setprofilePopUp] = useState(false);
    const [gud2, setGud2] = useState(0);
    const[congrats, setCongrats] = useState();



    const [congrats2, setCongrats2] = useState();
    // Tsolavsan popup
    const [badgeCongrats, setbadgeCongrats] = useState(false);
    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const drink = async() => {
        try{
            if(uscalc){
                ijj = ijj + 1 ;
                if(Math.sign(uscalc) == 1){
                    setTest(lolfuck - (uscalc * ayga) <= 0 ? (setUujDuussan(true), 0) : lolfuck - (uscalc * ayga));
                    setGud2(niitGudarsan + uscalc * ayga);
                    
                    setPercentage(100 - (test / defuuh * 100));
                    setModelOpen(false);
                    
                }
            }
            else if(!uscalc) {
                ijj = ijj + 1;
                setTest(lolfuck - (defayga * ayga) <= 0 ? (setUujDuussan(true), 0) : lolfuck - (defayga * ayga));
                setGud2(niitGudarsan + defayga * ayga);
                setPercentage(100 - (test / defuuh * 100));
                setModelOpen(false);
            }


        }
        catch(exception) {
            alert(exception);
        }

    }
    const drink_amount = async() => {
        let f = await AsyncStorage.getItem("usuuh");
        if(f !== null) {
            setLolFuck(parseInt(f))
        }
        let niitgudrah = await AsyncStorage.getItem("niitgudrah");
        if (niitgudrah !== null) {
          setNiitGudarsan(parseInt(niitgudrah));
        }
        let uujbn = await AsyncStorage.getItem("niituujbn");
        console.log("niit uuj bn" + uujbn);
        
        ///percent amount
        let kkk = AsyncStorage.getItem("percentage");
        if(kkk !== null) {
          kkk = parseInt(kkk);
          setPercentage(kkk);
        }
        
    }

 


    const defus = async() => {
        let defuult = await AsyncStorage.getItem("defusuult");
        defuult = parseInt(defuult);
        setDefuuh(defuult);
    }
  
    
  
        const askPermissions = async () => {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== "granted") {
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
            }
            if (finalStatus !== "granted") {
              return false;
            }
            return true;
          };
          const something = async() =>{
            await Notifications.cancelAllScheduledNotificationsAsync();
          }
          const scheduleNotification = async () => {
            

            
            Notifications.scheduleLocalNotificationAsync(
              {
                title: "Hello fucking world",
                body: 'Ajillaj bn sda goy ym be',
              },
              {
                repeats: true,
                time: new Date().getTime() + 5000,
                
              },
            );
            
          
    }   
     useEffect(() => {
 



      LogBox.ignoreLogs(['Setting a timer']);
       timOut();
        something();
        if(Platform.OS == 'ios') {
            Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Remember to drink water!',
                },
                trigger: {
                  minute: 60 * 2,
                  repeats: true
                },
              });
        }
        else {
      
          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Remember to drink water!',
            },
            trigger: {
              seconds: 31,
              repeats: true
            },
          });
        }   
        
        
        askPermissions();
        drink_amount();
        
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [])
    
    const tsol = async() => {
      let badge = await AsyncStorage.getItem("niituujbn");
      badge = parseInt(badge);
      if(badge > 1 && badge <= 5000) {
        let executed = await AsyncStorage.getItem("checkDat");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat", "4");
        }
        let ml = 5000 - badge;
        var progressbar = badge / 5000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Тэрхийн цагаан нуур");
        setCongrats(require("../images/10_terkhiin_tsagaan_lake_mon.png"));
        setCongrats2("Тэрхийн цагаан нуур");
        
        
        
      }
      else if(badge > 5000 && badge <= 10000) {
        let executed = await AsyncStorage.getItem("checkDat1");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat1", "4");
        }
        let ml = 10000 - badge;
        var progressbar = badge - 50000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Хурган нуур");
        setCongrats(require("../images/09_hurgan_lake_mon.png"));
        setCongrats2("Хурган нуур");
        
        
      }
      else if(badge > 10000 && badge <= 20000) {
        let executed = await AsyncStorage.getItem("checkDat2");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat2", "4");
        }
        let ml = 20000 - badge;
        var progressbar = badge - 10000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        console.log("currentml " + badge + "progress " + progressbar);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Айраг нуур");
        setCongrats(require("../images/08_airag_lake_mon.png"));
        setCongrats2("Айраг нуур");
        
        
      }
      else if(badge > 20000 && badge <= 30000) { 
        let executed = await AsyncStorage.getItem("checkDat3");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat3", "4");
        }
        let ml = 30000 - badge;
        var progressbar = badge - 20000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Улаан нуур");
        setCongrats(require("../images/07_ulaan_lake_mon.png"));
        setCongrats2("Улаан нуур");
       
       
         
      }
      else if(badge > 30000 && badge <= 40000) {
        let executed = await AsyncStorage.getItem("checkDat4");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat4", "4");
        }
        let ml = 40000 - badge;
        var progressbar = badge - 30000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Тэлмэн нуур");
        setCongrats(require("../images/06_telmen_lake_mon.png"));
        setCongrats2("Тэлмэн нуур");
        
        
      }
      else if(badge > 40000 && badge <= 50000) {
        let executed = await AsyncStorage.getItem("checkDat5");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat5", "4");
        }
        let ml = 50000 - badge;
        var progressbar = badge - 40000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Бөөн цагаан нуур");
        setCongrats(require("../images/05_buun_tsagaan_nuur_mon.png"));
        setCongrats2("Бөөн цагаан нуур");
        
        
      }
      else if(badge > 50000 && badge <= 60000) {
        let executed = await AsyncStorage.getItem("checkDat6");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat6", "4");
        }
        let ml = 60000 - badge;
        var progressbar = badge - 50000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Буйр нуур");
        setCongrats(require("../images/04_buir_lake_mon.png"));
        setCongrats2("Буйр нуур");
        
        
      }
      else if(badge > 60000 && badge <= 70000) {
        let executed = await AsyncStorage.getItem("checkDat7");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat7", "4");
        }
        let ml = 70000 - badge;
        var progressbar = badge - 60000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Хар ус нуур");
        setCongrats(require("../images/03_khar_us_lake_mon.png"));
        setCongrats2("Хар ус нуур");
        
        
      }
      else if(badge > 70000 && badge <= 80000) {
        let executed = await AsyncStorage.getItem("checkDat8");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat8", "4");
        }
        let ml = 80000 - badge;
        var progressbar = badge - 70000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Хөвсгөл нуур");
        setCongrats(require("../images/02_khuvsgul_lake_mon.png"));
        setCongrats2("Хөвсгөл нуур");
        
        
      }
      else if(badge > 80000 && badge <= 90000) {
        let executed = await AsyncStorage.getItem("checkDat9");
        if(executed === null) {
          setbadgeCongrats(true);
          AsyncStorage.setItem("checkDat9", "4");
        }
        let ml = 90000 - badge;
        var progressbar = badge - 80000;
        progressbar = progressbar / 10000;
        progressbar = progressbar.toFixed(2);
        console.log("asd" + progressbar);
        AsyncStorage.setItem("badgeml", JSON.stringify(ml));
        AsyncStorage.setItem("badgeprog", progressbar)
        AsyncStorage.setItem("badgeName", "Увс нуур");
        setCongrats(require("../images/01_uvs_lake_mon.png"));
        setCongrats2("Увс нуур");
        
        

      }
    }
    tsol();
    useEffect(() => {
    
      
    
     
    defus();
        if(ijj > 0){
        
        drink();
        setLolFuck(test);
        AsyncStorage.setItem("usuuh", JSON.stringify(test));
        setNiitGudarsan(gud2);
        AsyncStorage.setItem("niitgudrah", JSON.stringify(gud2));
        AsyncStorage.setItem("niituujbn", JSON.stringify(gud2));
        AsyncStorage.setItem("percentage", JSON.stringify(percentage));
        }
    }, [test, gud2])

    


   
// ayga nii too nemeh
    const aygnemeh = () => {
        if (ayga < 10){
            setAyga(ayga+1);
        }
        else {
            return
        }
        
    }
    const aygahasah = () => {
        if(ayga > 1) {
            setAyga(ayga - 1);
        }
        else{
            return
        }
        
    }


    place = (defayga * ayga).toString();    
    
    
        const nerheseg = async() => {
            let ganggang = await AsyncStorage.getItem("nameheseg");
            if(ganggang !== null) {
                setName(ganggang);
            }
        }
        nerheseg();


        const ihuult = async() => {
            if (!hmm){
                setHmm(true);       
            }
            else{
                setHmm(false);

            }
            
        }


    let prochange = async() => {
        let profile = await AsyncStorage.getItem("pro");
        if(profile !== null){
            setPro(profile);
  
        }
        else if(profile === null) {
            setPro(image.image);
         
        }
    }
    prochange();








    ///Profile heseg


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


    ///APPSTATE

    
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
      AppState.addEventListener('change', handleAppStateChange);
      return () => {
        AppState.removeEventListener('change', handleAppStateChange);
      };
    }, []);
  
    const handleAppStateChange = (nextAppState) => {
      console.log('App State: ' + nextAppState);
      if (appState != nextAppState) {
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App State: ' + 'App has come to the foreground!');
          
        }
        timOut();
        setAppState(nextAppState);
      }
    };
    
   const timOut = () => {
    const Day = 24 *60 *60;
    var seconds = new Date().getSeconds();
    var hour = new Date().getHours() * 60 *60;
    var minute = new Date().getMinutes() * 60;
    var niilber = seconds + hour + minute;
    var uldegdel = Day - niilber;
    console.log("uldegdel" + uldegdel);
    setInterval(async function(){
      let r = '0';
      let f = await AsyncStorage.getItem("defusuult");
      AsyncStorage.setItem("usuuh", f);
      AsyncStorage.setItem("niitgudrah", "0");
      alert("margaash desu");
      drink_amount();
    }, uldegdel * 1000)
   }
   

    return (                    
    
        <View style={styles.container} >
            <Modal transparent={true} visible={profilePopUp} style={{flex: 1}} animationType="slide">
            <BlurView intensity={40} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                <View style={{width:286, height: 424, backgroundColor: "#2F60B5", borderRadius: 12}}>
                {image1 &&  <Image style={{width: 194, height: 194, borderRadius: 180, alignSelf: "center", marginTop: 31}} source={{uri: image1}} />}
                    <TouchableOpacity onPress={pickImage} style={{width: 32, height: 32, backgroundColor:"#fff", borderRadius: 90, alignItems:"center", justifyContent:"center", alignSelf: "center", marginLeft: 140, marginTop: -40}}>
                    <View>
                    <Entypo name="camera" size={20} color="#2F60B5" />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeImage}>
                    <View style={{width:79, height: 24, borderRadius: 12, borderColor: "#FFF", borderWidth: 1, alignItems:"center", justifyContent:"center", alignSelf:"flex-end", marginTop: 13, marginRight: 37}}>
                        <Text style={{fontSize: 8, color:"#FFF"}}>Зургаа устгах</Text>
                    </View>
                    </TouchableOpacity>
                    <View  style={{width:250.31, height:0.3, alignSelf: "center",backgroundColor:"#9D9D9D", marginTop:25.1}}></View>
                    <TouchableOpacity  style={{position:"absolute", right: 18.5, top: 19.2}} onPress={() => {
                        setprofilePopUp(false);
                    }}>
                    <Ionicons name="close" size={24} color="#FFF"/> 
                    </TouchableOpacity>
                    <Text style={{color: "#FFF", alignSelf: "center", fontSize: 12, marginTop: 19.9}}>Таны цол</Text>
                    <Text style={{color: "#FFF", fontSize:24, alignSelf: "center"}}>Тэрхийн цагаан нуур</Text>
                </View>
            </BlurView>
            </Modal>
            <Modal transparent={true} visible={badgeCongrats} style={{flex: 1}} animationType="slide">
            <BlurView intensity={180} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
            
              <View style={{width: 286, height:474, backgroundColor:"#2F60B5", alignItems: "center", borderRadius: 12}}>
              <ConfettiCannon fadeOut={true} autoStart={true} count={50} origin={{x: -10, y: 0}} />
                <TouchableOpacity style={{alignSelf: "flex-end", marginRight: 15.7, marginTop: 16.2}} onPress={() => {
                  setbadgeCongrats(false);
                }}>
              <Ionicons name="close" size={24} color="#FFF" /> 
              </TouchableOpacity>
              <View style={{marginTop: 4.5}}>
              <Svg
      height={64}
      viewBox="0 0 512.002 512.002"
      width={64}
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path fill="#FFF" d="M492.25 285.422c2.591-4.877.738-10.931-4.139-13.523-56.033-29.776-124.386-22.635-172.942 17.266l-16.157-16.157 26.387-26.387c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-26.387 26.387-64.381-64.381c14.644-19.639 23.857-42.707 26.762-67.27 3.347-28.316-1.98-56.64-15.408-81.907-2.591-4.877-8.647-6.729-13.523-4.138-4.877 2.592-6.729 8.646-4.138 13.523 21.538 40.53 18.167 88.656-8.007 125.478l-42.427-42.427c-5.953-5.953-14.415-8.423-22.637-6.612-8.222 1.813-14.86 7.614-17.758 15.519L1.532 478.982c-3.327 9.077-1.148 18.963 5.689 25.799 4.721 4.721 10.894 7.221 17.253 7.221 2.85 0 5.737-.503 8.546-1.532l332.33-121.821c7.905-2.897 13.706-9.536 15.52-17.757 1.812-8.222-.659-16.684-6.612-22.637l-44.86-44.861c42.253-33.714 101.034-39.497 149.329-13.833 4.876 2.592 10.93.738 13.523-4.139zM159.276 442.887l-90.161-90.161 24.982-68.151 133.33 133.33zM110.409 460.8l-59.207-59.207 10.326-28.169 77.05 77.05zm-84.273 30.891c-2.37.869-4.007-.287-4.774-1.052-.766-.766-1.921-2.404-1.052-4.773l23.304-63.575 46.096 46.096zm335.203-125.106c-.2.907-.839 2.54-2.871 3.285l-61.477 22.535-56.877-56.878c-3.905-3.906-10.237-3.905-14.142-.001-3.905 3.905-3.906 10.237-.001 14.142l50.322 50.323-28.169 10.326-146.44-146.44 10.326-28.169 50.323 50.322c1.952 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.905-10.237-.001-14.142l-56.877-56.877 22.535-61.477c.745-2.032 2.378-2.671 3.286-2.872a4.823 4.823 0 011.034-.113c.919 0 2.09.272 3.154 1.337l210.51 210.51c1.53 1.531 1.423 3.282 1.223 4.189zM301.597 79.804c5.523 0 10-4.477 10-10 0-8.375 6.814-15.188 15.189-15.188 19.402 0 35.188-15.785 35.188-35.188 0-5.523-4.478-10-10-10s-10 4.477-10 10c0 8.375-6.814 15.188-15.188 15.188-19.403 0-35.189 15.785-35.189 35.188 0 5.523 4.478 10 10 10zM390.319 174.195c20.039 0 36.342-16.303 36.342-36.341 0-9.01 7.33-16.341 16.341-16.341 5.522 0 10-4.477 10-10s-4.478-10-10-10c-20.038 0-36.341 16.303-36.341 36.341 0 9.01-7.331 16.341-16.342 16.341-5.522 0-10 4.477-10 10s4.478 10 10 10zM448.002 193.485c0 17.645 14.355 32 32 32s32-14.355 32-32-14.355-32-32-32-32 14.355-32 32zm32-12c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12z" />
      <Path fill="#FFF" d="M315.11 169.854c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.356 32 32 32zm0-44c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM128.002 64c17.645 0 32-14.355 32-32s-14.355-32-32-32-32 14.355-32 32 14.355 32 32 32zm0-44c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM452.505 351.058c-3.904-3.905-10.234-3.905-14.143-.001-3.905 3.905-3.905 10.237 0 14.142l9.428 9.428c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.977 7.071-2.929c3.905-3.905 3.905-10.237 0-14.142zM499.645 398.198c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l9.428 9.428c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zM494.93 351.058l-9.428 9.428c-3.905 3.905-3.905 10.237 0 14.142 1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l9.428-9.428c3.905-3.905 3.905-10.237 0-14.142-3.905-3.906-10.237-3.905-14.142 0zM447.79 398.198l-9.428 9.428c-3.905 3.905-3.905 10.237 0 14.143a9.968 9.968 0 007.071 2.929c2.56 0 5.118-.976 7.071-2.929l9.428-9.428c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.142 0zM492.574 29.428a9.966 9.966 0 007.071-2.929l9.428-9.428c3.905-3.905 3.905-10.237 0-14.142-3.906-3.905-10.238-3.905-14.143 0l-9.428 9.428c-3.905 3.905-3.905 10.237 0 14.142a9.97 9.97 0 007.072 2.929zM445.433 76.568c2.56 0 5.118-.976 7.071-2.929l9.428-9.428c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-9.428 9.428c-3.905 3.905-3.905 10.237 0 14.143a9.972 9.972 0 007.072 2.929zM499.645 50.069c-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l9.428 9.428c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zM447.79 26.499c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.142l-9.428-9.428c-3.904-3.905-10.234-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.142zM201.221 300.78c-2.63 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93 2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93zM347.118 196.616l-7.25 7.25c-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l7.25-7.25c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.142 0z" />
    </Svg>
    </View>
                <Text style={{fontSize: 30, color: "#FFF", marginTop: 31.9}}>Баяр хүргэе!</Text>
                <Text style={{fontSize: 12, color: "#FFF"}}>Та {congrats2} цолын эзэн боллоо.</Text>
                <Image source={congrats} style={{width: 220, height: 220}}/>
                <Text style={{fontSize: 16, color: "#FFF", opacity: 0.6}}>Дэлгэрэнгүй</Text>
                <View style={{width: 231, height: 53, borderRadius: 53, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", marginTop: 13, elevation: 2}}>
                      <Text style={{fontSize: 16, color: "#2F60B5"}}>Энэ цолыг татаж авах</Text>
                </View>
              </View>
              </BlurView>
            </Modal>
                <View style={styles.tabbar}>
                    <View style={styles.zohitsuulalt}>
                    <TouchableOpacity onPress={()=>{
                        setprofilePopUp(true);
                    }}>
                    <Image style={{width:40, height: 40, borderRadius: 30, marginRight: 18}} source={{uri: pro}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: 21, marginTop: -38, width:100, height: 60}}>
                        <Text style={{color:"grey", fontSize: 14}}>Сайн уу,</Text>
                        <Text style={{fontSize: 18, color: "black", fontFamily: "Roboto_300Light"}}>{name}!</Text>
                        <View style={{width: 330, borderWidth:0.3, borderColor: "#5B5B5B", marginTop: 20.2, opacity: 0.7}}></View>
                    </View>
                                    

                </View>
                <ScrollView contentContainerStyle={{flex:1}} refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={drink_amount}
          />
        }>
                <Text style={{fontSize: 13, width: 305, marginTop: 35, fontFamily: "Roboto_300Light", alignSelf: "center"}}>Таны өдөрт уувал зохих усны хэмжээ {defuuh}мл</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={(ihuult)}>
                <View style={styles.usuuh}>
                
                <ProgressCircle percent={percentage} radius={121.4} borderWidth={8} color={!hmm ? "#3FB5F1": "#1993D1"} bgColor={!hmm ? "white": "#1993D1"} shadowColor={!hmm ? "white": "#1993D1"}>
                    <Text style={{fontSize: 30, fontFamily: "Roboto_300Light", color: !hmm ? '#1993D1': "white"}}>{!hmm ? lolfuck : niitGudarsan} мл</Text>
                    <Text style={{fontSize: 15, fontFamily: "Roboto_300Light", color: !hmm ? '#1993D1': "white"}}>{!hmm ? 'ус уух үлдлээ' : 'нийт уусан байна'}</Text>
                </ProgressCircle>
                </View>
               
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => {
                    setModelOpen(true);
                }}>
                <View style={styles.uuhbtn}>
                   <Text style={{fontSize:16 , color: "white", fontFamily: "Roboto_300Light"}}>+ Усаа нэмэх</Text>
                </View>
                </TouchableWithoutFeedback>

                </ScrollView>
                <Modal transparent={true} visible={modal} animationType="slide" style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={() => {
                        setModelOpen(false);
                    }}>
                        <BlurView intensity={180} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                        <View style={styles.usaanemeh}>
                            <Text style={{alignSelf: "center", fontSize: 12, color: "white", marginTop: 30, fontFamily: "Roboto_300Light"}}>Уусан усныхаа аяганы тоог оруулна уу.</Text>
                            <View style={styles.insidenemeh}>
                                <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}  onPress={aygahasah}>
                                    <Image style={{width: 28.5, marginTop: 66}} source={require("../images/hasah.png")} />
                                </TouchableOpacity>
                                <Text style={{fontSize: 40, color: "white", marginTop: 42, fontFamily: "Roboto_300Light"}}>
                                    {ayga}
                                </Text>
                                <TouchableOpacity hitSlop={{top: 1, bottom: 1, left: 20, right: 20}} onPress = {aygnemeh} >
                                <Image style={{width: 28.5, marginTop: 51.7}} source={require("../images/nemeh.png")} />
                                </TouchableOpacity>
                            </View>
                            
                            <TextInput  placeholder={place + 'мл'} value={uscalc} maxLength={4} onChangeText = {(too) => setusCalc(too)} style={{fontFamily: "Roboto_300Light", alignSelf: "center", borderWidth: 1, borderColor: "white", borderRadius: 6, width: 93, height: 28, textAlign: "center", marginTop: 16}} keyboardType="number-pad" />
                            <TouchableWithoutFeedback onPress={drink}>
                            
                            <Image source={require('../images/zovdoo.png')} style={{justifyContent: "flex-end", alignSelf: "flex-end", marginRight: 19}} />
                            </TouchableWithoutFeedback>
                        
                        </View>
                        </BlurView>
                    </TouchableWithoutFeedback>
                </Modal>
                
                    
                <Modal transparent={true} visible={uujDuussan} animationType="slide" style={{flex: 1}}>
                <BlurView intensity={35} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                <ConfettiCannon fadeOut={true} autoStart={true} count={50} origin={{x: -10, y: 0}} />
                    <View style={{width: 286, height: 212, backgroundColor: "#1993D1", alignSelf: "center", borderRadius: 12}}>
                        <View style={{alignItems: "center", marginTop: 26, marginBottom: 24}}>
                        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      
    >
      <G data-name="Group 101">
        <G data-name="Component 5 \u2013 1">
          <Path
            data-name="Path 27"
            d="M17 32.892l8.924 10.768 21.417-20.659"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={5}
          />
        </G>
        <G data-name="Ellipse 43" fill="none" stroke="#fff" strokeWidth={3}>
          <Circle cx={32} cy={32} r={32} stroke="none" />
          <Circle cx={32} cy={32} r={30.5} />
        </G>
      </G>
    </Svg>
                        </View>
                        <View>
                            <Text style={{fontSize: 16, color: "#FFF", textAlign: "center", fontFamily: "Roboto_300Light"}}>Та өнөөдрийн уувал зохистой усаа ууж дууслаа!</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setUujDuussan(false);
                        }}>

                        
                        <View style={{justifyContent:"flex-end", alignSelf: "flex-end", marginTop: 14, marginRight: 25 }}>
                            <Text style={{color: "#FFF", fontSize: 18}}>За</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                    </BlurView>
                </Modal>
              
                
             
                {/* <Text>{isFocused ? 'focused' : 'unfocused'}</Text> */}
        </View>
        
    );
}
const Tab = createMaterialBottomTabNavigator();
function Main2() {
    return(


    <Tab.Navigator activeColor="#1993D1" labeled={false} barStyle={{backgroundColor:'white', marginHorizontal: 68, elevation: 0}} initialRouteName="Home" style={{backgroundColor: "white", shadowColor: "transparent", elevation: 0}}
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) =>{
            if(route.name ==="Badge") {
                if(focused) {
                    return(
                        <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 447.74 512"
    >
      <Path
        d="M445.49 440.62a15 15 0 01-12.76 7.11H359.9L316.2 506a15 15 0 01-25.41-2.29L230.6 383.34c-2.24.07-4.48.13-6.73.13s-4.5-.06-6.73-.13L157 503.71a15 15 0 01-25.47 2.29l-43.7-58.27H15A15 15 0 011.58 426l63.49-126.93a190.67 190.67 0 01-32.94-107.34C32.13 86 118.14 0 223.87 0S415.6 86 415.6 191.73a190.63 190.63 0 01-32.93 107.33l63.48 127a15 15 0 01-.66 14.56z"
        fill="#1993D1"
      />
    </Svg>
                    )
                }
                else{
                    return (
                        <Svg
                        height="25pt"
                        viewBox="-32 0 511 512"
                        width="28pt"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path fill="#1993D1" d="M446.648 426.023L383.172 299.06c20.777-30.645 32.93-67.59 32.93-107.325C416.102 86.012 330.09 0 224.367 0 118.645 0 32.633 86.012 32.633 191.734c0 39.735 12.152 76.684 32.933 107.332L2.082 426.023a15.007 15.007 0 00.656 14.594 15.008 15.008 0 0012.762 7.117h72.832l43.7 58.266c2.85 3.797 7.304 6 12 6 6.222 0 11.124-3.71 13.417-8.293l60.188-120.371c2.234.078 4.476.133 6.73.133 2.254 0 4.496-.055 6.73-.133l60.188 120.371c2.285 4.574 7.192 8.293 13.418 8.293a15 15 0 0011.996-6l43.703-58.266h72.832c5.2 0 10.028-2.695 12.758-7.117a14.987 14.987 0 00.656-14.594zm-305.175 42.559l-33.641-44.848a14.996 14.996 0 00-12-6H39.77l46.546-93.086c26.43 27.438 60.93 47.051 99.645 54.954zm-78.84-276.848C62.633 102.554 135.187 30 224.367 30s161.735 72.555 161.735 161.734S313.547 353.47 224.367 353.47 62.633 280.914 62.633 191.734zm290.265 226a15.007 15.007 0 00-12 6l-33.636 44.848-44.492-88.98c38.718-7.907 73.222-27.516 99.652-54.961l46.539 93.09h-56.063zm0 0" />
                        <Path fill="#1993D1" d="M300.938 216.613l41.89-50a15 15 0 00-7.855-24.184l-63.278-15.827-34.613-55.293a14.998 14.998 0 00-25.43 0l-34.605 55.293-63.274 15.828a15 15 0 00-10.628 9.914 15.007 15.007 0 002.77 14.27l41.89 50-4.508 65.066a15.008 15.008 0 006.144 13.172c6.348 4.613 12.805 2.43 14.426 1.777l60.5-24.383 60.5 24.387a15.002 15.002 0 0020.57-14.95zm-26.88-14.633a14.99 14.99 0 00-3.464 10.668l3.261 47.2-43.878-17.688c-4.864-1.96-9.13-.844-11.215 0l-43.88 17.688 3.27-47.196a15.021 15.021 0 00-3.468-10.672L144.3 165.72l45.894-11.48a14.993 14.993 0 009.075-6.594l25.101-40.106 25.106 40.106a14.993 14.993 0 009.074 6.593l45.894 11.48zm0 0" />
                      </Svg>
                    )
                }
            }

            else if(route.name === "Home"){
                if(focused){
                    return (
                        <Svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 510.95 511"
                      >
                        <Path
                          d="M497.21 288.77a46.76 46.76 0 01-33.27 13.78h-7.7V456a55.11 55.11 0 01-55.06 55h-81.56a15 15 0 01-15-15V375.77a25.14 25.14 0 00-25.11-25.12h-48.08a25.15 25.15 0 00-25.12 25.12V496a15 15 0 01-15 15h-81.52a55.11 55.11 0 01-55.06-55V302.55h-8.31a14.08 14.08 0 01-1.45-.07 47 47 0 01-31.3-80.15c.06-.07.14-.14.21-.21L222.22 13.78a47 47 0 0166.53 0L497.2 222.22a47.12 47.12 0 01.01 66.55z"
                          fill="#1993D1"
                        />
                      </Svg>
                    )
                }
                else {
                    return (
                        <Svg
                        height="25pt"
                        viewBox="0 1 511 511.999"
                        width="511pt"
                        xmlns="http://www.w3.org/2000/svg"
                        
                      >
                        <Path fill="#1993D1" d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
                      </Svg>
                    )
                }
            }
            else if(route.name==="Settings"){
                if(focused){
                    return(
                        <Svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        height={25}
                        width={28}
           
                      >
                        <Path
                          d="M464.87 192.8H454a207.69 207.69 0 00-13.33-32.1l7.7-7.69a47.13 47.13 0 000-66.67l-22.7-22.71a47.14 47.14 0 00-66.67 0l-7.7 7.71A206.71 206.71 0 00319.2 58V47.13A47.18 47.18 0 00272.07 0h-32.14a47.18 47.18 0 00-47.13 47.13V58a206.71 206.71 0 00-32.1 13.33l-7.7-7.7a47.14 47.14 0 00-66.67 0l-22.7 22.71a47.13 47.13 0 000 66.66l7.71 7.7A207.69 207.69 0 0058 192.8H47.13A47.19 47.19 0 000 239.93v32.14a47.19 47.19 0 0047.13 47.13H58a206.71 206.71 0 0013.33 32.1l-7.7 7.7a47.12 47.12 0 000 66.66l22.71 22.71a47.14 47.14 0 0066.67 0l7.7-7.71A206.71 206.71 0 00192.8 454v10.87A47.18 47.18 0 00239.93 512h32.14a47.18 47.18 0 0047.13-47.13V454a207.65 207.65 0 0032.1-13.32l7.69 7.69a47.13 47.13 0 0066.67 0l22.71-22.71a47.14 47.14 0 000-66.67l-7.71-7.7A207.69 207.69 0 00454 319.2h10.87A47.18 47.18 0 00512 272.07v-32.14a47.18 47.18 0 00-47.13-47.13zM337.4 256a81.4 81.4 0 11-81.4-81.4 81.5 81.5 0 0181.4 81.4z"
                          fill="#1993D1"
                        />
                      </Svg>
                    )
                }
                else{
                    return(

                    
                    <Svg
                    height={25}
                    viewBox="0 0 512 512"
                    width={28}
                    xmlns="http://www.w3.org/2000/svg"
               
                  >
                    <Path fill="#1993D1" d="M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 01-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0158.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0113.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 01192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0132.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0113.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 01-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 01-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0045.831 19.025 14.999 14.999 0 0111.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0111.252-14.524 176.812 176.812 0 0045.831-19.025 15 15 0 0118.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 01-2.305-18.242 176.78 176.78 0 0019.024-45.831 15 15 0 0114.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 01-14.524-11.251 176.815 176.815 0 00-19.024-45.831 15 15 0 012.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 01-18.243 2.305 176.812 176.812 0 00-45.831-19.025 14.999 14.999 0 01-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 01-11.252 14.524 176.812 176.812 0 00-45.831 19.025 15.002 15.002 0 01-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 012.305 18.242 176.78 176.78 0 00-19.024 45.831 15 15 0 01-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0114.524 11.251 176.815 176.815 0 0019.024 45.831 15 15 0 01-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z" />
                    <Path fill="#1993D1" d="M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z" />
                  </Svg>
                    )
                }
            }


        }
    })}>
        <Tab.Screen name="Badge" component={Badge} />
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Settings" component={Settings} />    
    </Tab.Navigator>
  
       )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    

    },
    insidenemeh: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 60
    },
    usaanemeh: {
        width: 274,
        height: 248,
        backgroundColor: '#1993D1',
        borderRadius: 6,
        alignSelf: "center",
        


    },
    tabbartop:{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginTop: 13
    },
    tabbar: {
       
        marginTop: 0,
        
        backgroundColor: "white",
        height: 118,
        borderBottomWidth: 0,
        borderBottomColor: "black",
        
    },
    zohitsuulalt: {
        alignSelf: "flex-end",
        flexDirection: "row",
        justifyContent:"flex-end",
        marginTop: 52,
    },
    profilepic: {
        width: 92,
        height: 92,
        borderRadius: 75,
        backgroundColor: "#1993D1",

    },
    usuuh: {
        backgroundColor: "white",
        borderColor: "#3FB5F1",
        borderWidth: 2,
        borderRadius: 180,
        height: 244,
        width: 244,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 33
    },
    usuuhBlue: {
        backgroundColor:"red",
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 180,
        height: 244,
        width: 244,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20
    },
    uuhbtn: {
        width: 178,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#1993D1",
        alignSelf: "center",
        marginTop: 39,
        alignItems: "center",
        justifyContent: "center",
        
        
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Main2;