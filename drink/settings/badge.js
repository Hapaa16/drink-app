import React, {useRef, useState, useEffect, createRef} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, useWindowDimensions,ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import Svg, { G, Path, Circle } from "react-native-svg";
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused } from '@react-navigation/native';
import {useFonts, Roboto_300Light, Roboto_300Light_Italic, Roboto_100Thin, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
const badgeData = [{
    key: "1",
    name : "Тэрхийн цагаан нуур",
    badge: require("../images/10_terkhiin_tsagaan_lake_mon.png"),
    location: "Архангай аймаг",
    description: "Архангай аймгийн Тариат сумын нутагт Хоргын тогооны дэргэд байдаг. Урт нь 16 километр, хамгийн өргөн нь 6 километр бөгөөд 61 ам километр талбайтай. 20 метр гүнтэй, далайн төвшнөөс дээш 2060 метрт оршдог"
},
{
    key: "2",
    name: "Хурган нуур",
    badge: require("../images/09_hurgan_lake_mon.png"),
    location: "Баян-өлгий аймаг",
    description: "Хурган нуур нь Баян-Өлгий аймаг дахь цэнгэг уст нуур. Хотон, Хурган, Даян зэрэг нь мөстлөгийн гаралтай томоохон нуурууд. Алтай таван богдын байгалийн цогцолборт газарт оршино."
},
{
    key: "3",
    name: "Айраг нуур",
    badge: require("../images/08_airag_lake_mon.png"),
    location: "Увс аймаг",
    description: "Айраг нуур нь баруун Монголын Их нууруудын хотгорт байх цэнгэг уст нуур. Айраг нуур нь илүүдэл усаа 5 км урт 200-300 м өргөн хоолойгоор Хяргас нуурт өгнө. Энэ хоолой зарим газраа 5-7 м гүн намуун урсгалтай байх ба өвөл хөлддөггүй"
},
{
    key: "4",
    name: "Улаан нуур",
    badge: require("../images/07_ulaan_lake_mon.png"),
    location: "Өмнөговь аймаг",
    description: "Улаан нуур нь дээр үед уртаараа 45 км, өргөнөөрөө 40 км, зарим газраа 11-15 м гүн, говийн хамгийн том 5 нууруудын нэг байсан. Нууруудын хөндийн хамгийн зүүн талд байх улаан нуур нь 1995 оноос хойш ширгэж үгүй болжээ"
},
{
    key: "5",
    name: "Тэлмэн нуур",
    badge: require("../images/06_telmen_lake_mon.png"),
    location: "Завхан аймаг",
    description: "Тэлмэн нуурын 26, өргөн нь 12, гүн нь 27 км, нуур дунд торойх гурван авгаш аралтайгаа 194 км талбайг эзлэх агаад далайн төвшнөөс 1700 гаруй метр өндөрт оршдог ба Тэлмэн нуур нь давстай нуур юм."
},
{
    key: "6",
    name: "Бөөн цагаан нуур",
    badge: require("../images/05_buun_tsagaan_nuur_mon.png"),
    location: "Баянхонгор аймаг",
    description: "Бөөн цагаан нуур нь Баянхонгор аймаг дахь Нууруудын хөндийн хамгийн том, давст нуур юм. Нуурын өргөн нь 11км, урт нь 24 км, дундаж гүн нь 9.3 метр, хамгийн гүн цэгтээ 16 метр хүрдэг байна"
},
{
    key: "7",
    name: "Буйр нуур",
    badge: require("../images/04_buir_lake_mon.png"),
    location: "Дорнод аймаг",
    description: "Буйр нуур нь Монгол-Өвөр Монголын зааг дээр орших цэнгэг уст нуур. Монголын зүүн бүсэд нуур цөөрөм цөөнгүй боловч түүний дотроос хамгийн том нь Буйр нуур юм. Хамгийн урт нь зүүн хойноос баруун урагш 40 километр,  өргөн нь 21 километр, эргийн шугамын урт 113 километр"
},
{
    key: "8",
    name: "Хар ус нуур",
    badge: require("../images/03_khar_us_lake_mon.png"),
    location: "Ховд аймаг",
    description: "Монголын том нууруудын нэг Хар ус нуур нь 1153 ам километр талбайтай, 72 километр урт, 26 километр өргөн, дундаа аралтай, урд захаараа хулс, шагшуургатай нуур юм.Их нууруудын хотгорын бүлэг нууруудын дотор далайн төвшнөөс дээш 1157 метр өндөрт орших цэнгэг устай, урсгал нуур юм. Хэдийгээр том талбайтай боловч маш гүехэн нуур бөгөөд хамгийн гүн нь 4.4 метр, дундаж гүн нь 2 метр байдаг."
},
{
    key: "9",
    name: "Хөвсгөл нуур",
    badge: require("../images/02_khuvsgul_lake_mon.png"),
    location: "Хөвсгөл аймаг",
    description: "Одоогоос 7 сая орчим жилийн өмнө үүссэн нуур. 2760 ам километр талбайтай, 34-36 километр өргөн, 136 километр урт, 262 метр гүн нуур бөгөөд далайн төвшнөөс дээш 1645 метр өндөрт оршдог. Эргийн шугамын урт нь 414 километр,  усны нөөцөөрөө Азид хоёрдугаарт ордог."
},
{
    key: "10",
    name: "Увс нуур",
    badge: require("../images/01_uvs_lake_mon.png"),
    location: "Увс аймаг",
    description: "Нуурын талбай нь 3350 хавтгай дөрвөлжин километр бөгөөд далайн төвшнөөс дээш 759 метрт оршдог. Урт нь 84 километр, өргөн нь 79 километр, гүн нь 10-20 метр гүехэн нуур юм. Увс аймгийн зүүн хойд хагаст орших, Монгол орны хамгийн том талбайтай, гадагшаа урсгалгүй, давстай, тогтмол нуур юм. Далайн давснаас тав дахин их давстай нуур хэмээдэг"
}]
export default function Badge() {
    const { width } = useWindowDimensions();
    const [badgename, setBadgeName] = useState();
    const [badgeprogress, setBadgeProgress] = useState();
    const [uldsen, setUldsen] = useState();
    const isFocused = useIsFocused();
    let [fontsLoaded] = useFonts({
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_100Thin,
        Roboto_400Regular,
        Roboto_700Bold
      });
    const [test, setTest] = useState(1);
    const scrollX = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = width;
    const SPACER = (width - ITEM_SIZE) /2;
    const badge_action = async() => {
        let tsol = await AsyncStorage.getItem("badgeName");
        if(tsol !== null) {
            setBadgeName(tsol);
            console.log(badgename);
        }
        else{
            setBadgeName("?");
        }
        switch(tsol){
            case "Тэрхийн цагаан нуур": 
                setTest(0);
                break;
            case "Хурган нуур": 
                setTest(1);
                break;
            case "Айраг нуур": 
                setTest(2);
                break;
            case "Улаан нуур": 
                setTest(3);
                break;
            case "Тэлмэн нуур": 
                setTest(4);
                break;       
            case "Бөөн цагаан нуур": 
                setTest(5);
                break;
            case "Буйр нуур": 
                setTest(6);
                break;
            case "Хар ус нуур": 
                setTest(7);
                break;
            case "Хөвсгөл нуур": 
                setTest(8);
                break;
            case "Увс нуур": 
                setTest(9);
                break;
        }
        
    }
  
    const badgeprog = async() => {
        let nextbadge = await AsyncStorage.getItem("badgeprog");
        let uldsentsol = await AsyncStorage.getItem("badgeml");
        if(uldsentsol !== null) {
            setUldsen(uldsentsol);
        }
        if (nextbadge !== null) {
            setBadgeProgress(parseFloat(nextbadge));
            console.log("ASDASD" + badgeprogress);
        }
    }
    
    badgeprog();
    badge_action();   
   
    return (
        
        <View style={{flex: 1, backgroundColor: "#FFF"}}>
            <View style={{height: 159, backgroundColor: "#2F60B5", borderBottomEndRadius: 12, borderBottomLeftRadius: 12}}>
            <View style={{justifyContent:"center", marginTop: 49, marginLeft: 29}}>
                <Text style={{alignSelf:'flex-start', color: '#FFF', fontSize: 12, fontFamily: 'Roboto_300Light', marginBottom: 8}}>Таны цол</Text>
                <Text style={{color: '#FFF', fontSize: 28, fontFamily: 'Roboto_700Bold'}}>{badgename}</Text>
                <TouchableOpacity style={{width: 26, height: 26, borderRadius: 90, borderColor: "#2F60B5", borderWidth: 1, alignItems: "center", justifyContent: "center", position: "absolute", top: 25, right: 35}}>
                <View>
                <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"

    >
      <G data-name="Group 109" fill="none" stroke="#fff">
        <G data-name="Group 108" strokeLinecap="round">
          <Path data-name="Path 131" d="M13.934 8.969v10.613" />
          <Path
            data-name="Path 132"
            d="M8.987 15.407l4.93 4.414 5.129-4.414"
            strokeLinejoin="round"
          />
        </G>
        <G data-name="Ellipse 45">
          <Circle cx={14} cy={14} r={14} stroke="none" />
          <Circle cx={14} cy={14} r={13.5} />
        </G>
      </G>
    </Svg>
    </View>
    </TouchableOpacity>
    <Progress.Bar progress={badgeprogress} width={309.5} style={{marginTop: 15, marginBottom: 6.3}} color="#FF9A16" unfilledColor="#FFF" borderWidth={0}/>
    <Text style={{fontStyle: "italic", fontSize: 12, color: "#FFF", alignSelf: "flex-end", marginRight: 35, opacity: 0.6, fontFamily: 'Roboto_300Light'}}>Дараагийн цол хүртэл {uldsen} мл</Text>
            </View>
            </View>
            <ScrollView>
            <FlatList 
            
            data={badgeData}
            horizontal
            contentContainerStyle={{}}
            decelerationRate={'normal'}
            initialScrollIndex={test}
            scrollEventThrottle={16}
            getItemLayout={(data, index) => (
                {length: ITEM_SIZE, offset: ITEM_SIZE * index, index}
              )}
            
            
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
              )}
            bounces={false}
            pagingEnabled
            
            renderItem={({item, index}) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0,1,0]
                })
            
              return (
                    <View style={{alignSelf:'center', width: width - 80, borderRadius: 20, alignItems: "center", marginHorizontal: 40}}>
                        
                        <Animated.Image source={item.badge} style={[{width: 285, height: 285}, {
                            transform: [{scale}]
                        }]}/>
                        <Text style={{fontSize: 25, color: "#1993D1", fontFamily: "Roboto_300Light"}}>{item.name}</Text>
                        <Text style={{fontSize: 12, fontFamily: "Roboto_300Light"}}>{item.location}</Text>
                        <Text style={{fontSize: 15, color: "#444748", textAlign: "justify", marginTop: 25, fontFamily: "Roboto_300Light"}}>{item.description}</Text>
                       
                    </View>
               )
            }}
            />
      </ScrollView>
        </View>
       
    );
}

const styles = StyleSheet.create({
    
})