// src/components/PieceItem.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import DeleteButton from "./DeleteButton";

export default function PieceItem({ piece, onRemove, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.type}>{piece.type}</Text>
        <Text style={styles.date}>{piece.date}</Text>
      </View>
      <DeleteButton onPress={onRemove} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textContainer: {
    flex: 1,
  },
  type: {
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
});