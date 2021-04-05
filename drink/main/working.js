import React, {useRef, useState, useEffect, Component} from 'react';
import {Text, View, StyleSheet, Image, Animated, Dimensions, Button, TouchableWithoutFeedback, TouchableOpacity, Modal} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { and } from 'react-native-reanimated';
import Login from '../login/login';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { BlurView } from 'expo-blur';
import { TextInput } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Progress from 'react-native-progress';
import { shouldUseActivityState } from 'react-native-screens';
function Main({route}) {
    const defayga = 220;
    const [lolfuck, setLolFuck] = useState(0);
    const [uscalc, setusCalc] = useState();
    const [uscalc2, setusCalc2] = useState();
    const [index, setIndex] = useState(0);
    const [modal, setModelOpen] = useState(false);
    const [ayga, setAyga] = useState(1);
    var nerushki = route.params.allah;

    const animatedValue = useRef(new Animated.Value(0)).current;
    const animation = toValue => Animated.timing(animatedValue, {
            toValue,
            duration: 250,
            useNativeDriver: false
        }
        )
   
    const down =() =>{
        setIndex(index === 1 ? 0 : 1);
        animation(index === 1 ? 0 : 1).start();

    }

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


    const niitUusan = async() => {
        try {
            if(uscalc) {
                setusCalc2(lolfuck - (uscalc * ayga));
                console.log("lolfuck : " + uscalc2);
                console.log("uscalc : " + uscalc);
                setLolFuck(uscalc2);
                await AsyncStorage.setItem("usuuh", JSON.stringify(uscalc2));
                

                
                

            }
            else if(!uscalc) {
                setGigi(defayga * ayga);
                setusCalc2(lolfuck - (defayga * ayga));
                
                await AsyncStorage.setItem("usuuh", JSON.stringify(uscalc2));
                setLolFuck(uscalc2);
                console.log("uscalce else; " + typeof(uscalc2));
            }


        }

        catch(exception) {
            alert(exception);
        }
        }
        const hole = () => {
            niitUusan();
            niitUusan();

        }
        const key = 'usuuh';
        const [gigi, setGigi] = useState();
        const removeItem = async() => {
            try {
                await AsyncStorage.removeItem(key);
                return true;
            }
            catch(exception) {
                return false;
            }
        }
        let keke = async() => {
            let lol = await AsyncStorage.getItem("usuuh");
            setusCalc2(lol);
            if (lol !== null){
                setLolFuck(lol)
                console.log("avchlaa" + lol)
            }
        }
        
        useEffect(() => {
            keke(); 
        }, [])
    return (                    

        <View style={styles.container} >
                <Animated.View style={[styles.tabbar, {
                    transform: [
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 72],
                            })
                        }
                    ]
                }]}>
                    <View style={styles.tabbartop}>
                        <Text style={{fontSize: 15, color: "white"}}>Хурган нуур</Text>
                        <Image style={{width: 53, height: 53}} source={require('../images/badge.png')} />
                    </View>
                    <View style={styles.zohitsuulalt}>
                    <TouchableWithoutFeedback onPress={down}>
                    <Image style={{marginLeft: 10, marginTop: 'auto', width:40, height: 40, borderRadius: 30, margin: 10}} source={require('../images/defpro.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{marginBottom: 20, fontSize: 14, color: "white"}}>Сайн уу, {nerushki}</Text>

                    </View>
                    <View style={{alignItems: "flex-end", position: "absolute", right: 22, bottom: 20}}>
                        <Image source={require('../images/borger.png')} />
                    </View>

                </Animated.View>
                <View style={styles.usuuh}>
                    <Text style={{fontSize: 30, color: '#1993D1'}}>{lolfuck} мл</Text>
                    <Text style={{fontSize: 15, color: '#1993D1'}}>ус уух үлдлээ</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    setModelOpen(true);
                }}>
                <View style={styles.uuhbtn}>
                   <Text style={{fontSize:16 , color: "white"}}>Усаа нэмэх</Text>
                </View>
                </TouchableWithoutFeedback>


                <Modal transparent={true} visible={modal} animationType="slide" style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={() => {
                        setModelOpen(false);
                    }}>
                        <BlurView intensity={180} tint="light" style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                        <View style={styles.usaanemeh}>
                            <Text style={{alignSelf: "center", fontSize: 12, color: "white", marginTop: 30}}>Уусан усныхаа аяганы тоог оруулна уу.</Text>
                            <View style={styles.insidenemeh}>
                                <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}  onPress={aygahasah}>
                                    <Image style={{width: 28.5, marginTop: 66}} source={require("../images/hasah.png")} />
                                </TouchableOpacity>
                                <Text style={{fontSize: 40, color: "white", marginTop: 42}}>
                                    {ayga}
                                </Text>
                                <TouchableOpacity hitSlop={{top: 1, bottom: 1, left: 20, right: 20}} onPress = {aygnemeh} >
                                <Image style={{width: 28.5, marginTop: 51.7}} source={require("../images/nemeh.png")} />
                                </TouchableOpacity>
                            </View>
                            
                            <TextInput placeholder="220мл" value={uscalc} onChangeText = {(too) => setusCalc(too)} style={{alignSelf: "center", borderWidth: 1, borderColor: "white", borderRadius: 6, width: 93, height: 28, textAlign: "center", marginTop: 16}} keyboardType="number-pad" />
                            <TouchableWithoutFeedback onPress={hole}>
                            <Image source={require('../images/zovdoo.png')} style={{justifyContent: "flex-end", alignSelf: "flex-end", marginRight: 19}} />
                            </TouchableWithoutFeedback>
                            <Text>{lolfuck}</Text>
                        </View>
                        </BlurView>
                    </TouchableWithoutFeedback>
                </Modal>
        </View>
    );
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
        marginTop: 122,


    },
    tabbartop:{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginTop: 30
    },
    tabbar: {
        marginTop: -72,
        backgroundColor: "#1993D1",
        height: 150,
        borderBottomLeftRadius: 28,
    },
    zohitsuulalt: {
        position: "absolute",
        left:0,
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 98,
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
        marginTop: 125
    },
    uuhbtn: {
        width: 179,
        height: 53,
        borderRadius: 20,
        backgroundColor: "#1993D1",
        alignSelf: "center",
        marginTop: 85,
        alignItems: "center",
        justifyContent: "center"
        
    }
})

export default Main;