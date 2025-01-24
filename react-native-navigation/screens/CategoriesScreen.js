import React, { useState } from "react";
import { FlatList, Button, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  const [numColumns, setNumColumns] = useState(2);

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
}

export default CategoriesScreen;
