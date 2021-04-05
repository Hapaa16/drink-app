import React, {useRef, useCallback} from 'react';
import {View, StyleSheet, Text, FlatList, useWindowDimensions, Animated, TouchableOpacity, Image} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {ExpandingDot} from "react-native-animated-pagination-dots";
import Svg, { SvgProps, G, Path } from "react-native-svg"
const INTRO_DATA = [
    {
      key: '1',
      title: 'Тавтай Морил',
      description:
        'Усны хэрэглээг бодит болгох таны апп.',
    },
    {
      key: '2',
      title: 'Уух усаа хянах',
      description:
        "Та өдөр болгон усны хэрэглээгээ хянаж, цаг тухайд нь уух боломжтой.",
    },
    {
      key: '3',
      title: 'Усаа ууж, өөрийгөө урамшуул',
      description:
        'Оноогоо цуглуулж цолын эзэн болоорой!',
    },];

function Welcomescreen({navigation}) {

    const { width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const renderItem = useCallback(({ item }) => {
      return (
        <View style={[styles.itemContainer, { width: width - 80 }]}>
            {item.key == "1" ? (
                
                    
                      <Image style={{width: 300, height: 300, alignSelf: "center", marginTop: 63}} source={require("../images/welcome1.png")}/>
                      
                    
                    
                
            ) : item.key == "3" ? (<View>
                    
                    <Image style={{width: 259, height: 300, alignSelf: "center", marginTop: 63}} source={require("../images/welcome3.png")}/>
                    
               
            </View>) : (
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 300, height: 300, alignSelf: "center", marginTop: 63}} source={require("../images/welcome2.png")}/>
                </View>
            )}
          <Text style={{fontSize:20, alignSelf: "center", marginTop: 33.1}}>{item.title}</Text>
          <Text style={{fontSize: 15, alignSelf: "center", marginTop: 33.4, textAlign: 'center'}}>{item.description}</Text>
          {item.key == "3" ? (
                <View style={{alignSelf:"flex-end", top: 92}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login");
                    }}>
                    <View style={{width: 68, height: 42, borderRadius:21, backgroundColor: "#1993D1", borderColor : "#707070", alignItems: "center", justifyContent: 'center'}}>
                    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29.018}
      height={19.818}
      viewBox="0 0 29.018 19.818"
      
    >
      <G
        data-name="Group 107"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <Path data-name="Path 130" d="M1 9.844h26" />
        <Path
          data-name="Path 91"
          d="M19.693 1.414l8.325 8.529-8.325 8.461"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
                    </View>
                    </TouchableOpacity>
                    
                </View>
            ) : (
                <View>
                </View>
            )}
        </View>
        
      );
    },
    [width]
  );
  const keyExtractor = React.useCallback((item) => item.key, []);
    return(
        <View style={styles.container}>
            <FlatList
        data={INTRO_DATA}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
      
          <ExpandingDot
        data={INTRO_DATA}
        expandingDotWidth={29}
        scrollX={scrollX}
        inActiveDotOpacity={1}
        inActiveDotColor="#1993D1"
        activeDotColor="#1993D1"
        dotStyle={{
            width: 5,
            height: 5,
            backgroundColor: '#347af0',
            borderRadius: 5,
            marginHorizontal: 5
     }}
     containerStyle={{alignSelf:"center", top: 543}}
/>
        
        </View>
       
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    
    alignItems:"center",
    marginHorizontal: 40,
    borderRadius: 20,
  },
});
export default Welcomescreen;