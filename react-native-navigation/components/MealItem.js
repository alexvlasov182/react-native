import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={style.mealItem}>
      <Pressable style={({ pressed }) => pressed ? style.buttonPressed : null}>
        <View style={style.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.details}>
            <Text style={style.detailItem}>{duration}m</Text>
            <Text style={style.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={style.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
    
  );
}

export default MealItem;

const style = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  }
})