import React from "react";
import { View, StatusBar } from "react-native";

import { usePieces } from "./src/utils/usePieces";
import PieceForm from "./src/components/PieceForm";
import PieceList from "./src/components/PieceList";

export default function App() {
  const { pieces, addPiece, removePiece } = usePieces();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <PieceForm onAdd={addPiece} />
        <PieceList pieces={pieces} onRemove={removePiece} />
      </View>
    </>
  );
}