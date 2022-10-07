import { useState } from "react";
import { View, FlatList, SafeAreaView, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { styles } from "./styles";

const images = [
  {
    id: 1,
    url: "https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/PMV-ADS-2022-2-E3-PROJ-MOV-T1-TIME1-AUTOAPP/main/AutoApp/assets/images/imgcarrossel1.png",
  },
  {
    id: 2,
    url: "https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/PMV-ADS-2022-2-E3-PROJ-MOV-T1-TIME1-AUTOAPP/main/AutoApp/assets/images/imgcarrossel2.png",
  },
  {
    id: 3,
    url: "https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/PMV-ADS-2022-2-E3-PROJ-MOV-T1-TIME1-AUTOAPP/main/AutoApp/assets/images/imgcarrossel3.png",
  },
];

const OnBoardItem = ({ item }) => {
  return <Image source={{ uri: item.url }} style={styles.image} />;
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{ maxHeight: width }}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={(event) => {
          setActiveIndex(parseInt(event.nativeEvent.contentOffset.x / width));
        }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => <OnBoardItem item={item} />}
      />
      {images.length > 1 ? (
        <View style={styles.dotsContainer}>
          {images.map((_, i) => (
            <View
              style={[
                styles.dot,
                { backgroundColor: i === activeIndex ? "#182E3A" : "#B9E0F7" },
              ]}
            />
          ))}
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Carousel;
