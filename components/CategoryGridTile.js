import { Pressable, View } from "react-native-web";

function CategoryGridTile({ title, color }) {
  console.log("CategoryGridTile", title, color);
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
