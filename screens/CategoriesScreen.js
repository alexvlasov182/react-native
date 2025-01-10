import { FlatList } from "react-native-web";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item) {
  return ;
}

function CategoriesScreen() {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={} />;
}

export default CategoriesScreen;
