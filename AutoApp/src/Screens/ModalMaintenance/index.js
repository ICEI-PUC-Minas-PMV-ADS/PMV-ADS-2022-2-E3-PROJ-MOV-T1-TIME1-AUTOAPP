import { useRef, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, FlatList, StyleSheet, Animated } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import slides from "./slides";
import Close from "../../Components/Buttons/Close";
import OnboardingItem from './onboardingItem';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
  },
  title: {
    paddingTop: '2px'
  }
})


const ModalMaintenance = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={styles.container}>

    <FlatList 
      data={slides} 
      renderItem={({item}) => <OnboardingItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX } }}], {
        useNativeDriver: false,
      })}
      />
    </View>

  );
};


export default ModalMaintenance;

