import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTitle({ title, color }) {
  console.log("CategoryGridTitle", title, color);
  console.log("Working with react-native application");

  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
