import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { TextInput, Button, FAB } from "react-native-paper";
import NavBar from "../../Components/NavBar";
import { styles } from "./styles";

const Publicity = () => {
     const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <ScrollView>
    <NavBar />
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/images/tools.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Anúncio 1</Text>
      
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
        </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/images/tools.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Anúncio 2</Text>
            
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/images/tools.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Anúncio 3</Text>
            
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Publicity;