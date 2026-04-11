// src/components/PieceList.js

import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import PieceItem from "./PieceItem";

export default function PieceList({ pieces, onRemove }) {
  const renderItem = ({ item }) => (
    <PieceItem
      piece={item}
      onRemove={() => onRemove(item.id)}
    />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={pieces}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});