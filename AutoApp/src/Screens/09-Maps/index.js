import React,{ useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,Dimensions,
} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import Statusbar from '../../Components/StatusBar';
import Nav from "../../Components/NavBar"
import { styles } from "./style";



const Maps = () => {

  let[regiao, setRegiao] = useState({
    latitude:-19.922877,
    longitude:-43.945375,
    latitudeDelta:0.014,
    longitudeDelta: 0.014}
    );

  return (
    <ScrollView >
      <Statusbar />
      <Nav/>
      <View style={styles.container}>       
        <MapView 

          style={styles.map}
          initialRegion={regiao}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
          >
            <Marker
              coordinate={{
                latitude:-19.924888,
                longitude:-43.947814,
              }}
            >
              <View style={styles.marcadorContainer}>
                <Image
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakNDEJW9Cm128-V9IkW4lqm5gdrgX1HiKDd0xfRpAfSJwoMy5-ZoANAhQreKPDywqhGw&usqp=CAU'}}
                  style={styles.mapMarkerImage}
                />
                <Text>Check-Up Car</Text>
              </View>

            </Marker>
             <Marker
              coordinate={{
                latitude:-19.918101,
                longitude:-43.947140,
              }}
            >
              <View style={styles.marcadorContainer}>
                <Image
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakNDEJW9Cm128-V9IkW4lqm5gdrgX1HiKDd0xfRpAfSJwoMy5-ZoANAhQreKPDywqhGw&usqp=CAU'}}
                  style={styles.mapMarkerImage}
                />
                <Text>Oficina</Text>
              </View>

            </Marker>

            <Marker
              coordinate={{
                latitude:-19.920186,
                longitude:-43.951018,
              }}
            >
              <View style={styles.marcadorContainer}>
                <Image
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakNDEJW9Cm128-V9IkW4lqm5gdrgX1HiKDd0xfRpAfSJwoMy5-ZoANAhQreKPDywqhGw&usqp=CAU'}}
                  style={styles.mapMarkerImage}
                />
                <Text>Volminas</Text>
              </View>

            </Marker>
          </MapView>
          
          
      
      </View>
    </ScrollView>
  );
};

export default Maps;

          /*<ScrollView style={styles.placesContainer} horizontal>
              <View style={styles.places} >

              </View>
          </ScrollView>*/

//Check-Up Car
// -19.924888, -43.947814

//Momentum Oficina Mecânica
// -19.918101, -43.947140

//Volminas
//-19.920186, -43.951018