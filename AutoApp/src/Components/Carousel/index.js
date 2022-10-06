import { useState } from "react";
import { View, FlatList, SafeAreaView, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { styles } from "./styles";

const images = [
  {
    id: 1,
    url: "http://c.files.bbci.co.uk/11DE7/production/_104019137_gettyimages-844232562.jpg",
  },
  {
    id: 2,
    url: "https://cdn.falauniversidades.com.br/wp-content/uploads/2021/10/22143145/Origem-Halloween.png",
  },
  {
    id: 3,
    url: "https://www.confidencecambio.com.br/wp-content/uploads/2021/10/copia-de-artigo-assinado-inovacao_optimized-2.png",
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
