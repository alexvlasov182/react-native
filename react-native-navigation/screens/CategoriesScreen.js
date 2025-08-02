import React, { useState } from "react";
import { FlatList, Button, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const [numColumns, setNumColumns] = useState(2);

  function renderCategoryItem(itemData) {
    console.log("Render Category Item:", itemData.item);
    console.log("Working with react-native");
    console.log(numColumns);

    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
      console.log("Pressed Category:", itemData.item.title);
      console.log("Category ID:", itemData.item.id);
      console.log("Navigation to MealsOverview with categoryId:", itemData.item.id);
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Toggle Columns"
        onPress={() => setNumColumns((prev) => (prev === 2 ? 1 : 2))}
      />
      <FlatList
        data={CATEGORIES}
        key={numColumns}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={numColumns}
      />
    </View>
  );
};

export default CategoriesScreen;
