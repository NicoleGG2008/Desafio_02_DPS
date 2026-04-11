import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

import { usePieces } from "../utils/usePieces";
import PieceForm from "../components/PieceForm";
import DetailModal from "../components/DetailModal";

export default function HomeScreen() {
  const { pieces, addPiece, removePiece } = usePieces();
  const [showForm, setShowForm] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleAddPiece = (newPiece) => {
    addPiece(newPiece);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    removePiece(id);
    setSelectedPiece(null);
  };

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Piezas</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.addButtonText}>+ Agregar pieza</Text>
        </TouchableOpacity>
      </View>

      {/* HISTORIAL */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Historial de piezas</Text>

        {pieces.length === 0 ? (
          <Text style={styles.emptyText}>
            No hay piezas, agregue una
          </Text>
        ) : (
          <FlatList
            data={pieces}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.pieceItem}
                onPress={() => setSelectedPiece(item)}
              >
                <View style={styles.pieceMain}>
                  <Text style={styles.pieceType}>{item.type}</Text>
                  <Text style={styles.pieceDate}>{item.date}</Text>
                </View>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.deleteText}>Eliminar</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* MODAL FORMULARIO */}
      <Modal visible={showForm} animationType="slide">
        <View style={styles.modalContainer}>
          <PieceForm
            onAdd={handleAddPiece}
            onCancel={() => setShowForm(false)}
          />
        </View>
      </Modal>

      {/* MODAL DETALLE */}
      <DetailModal
        isVisible={!!selectedPiece}
        onClose={() => setSelectedPiece(null)}
        piece={selectedPiece}
        onDelete={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#1F2937",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  addButton: {
    marginTop: 15,
    backgroundColor: "#22C55E",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  historyContainer: {
    flex: 1,
    padding: 20,
  },

  historyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#1F2937",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#6B7280",
    fontSize: 16,
  },

  pieceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 12,
    elevation: 4,
  },

  pieceMain: {
    flex: 1,
  },

  pieceType: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
  },

  pieceDate: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  deleteButton: {
    backgroundColor: "#EF4444",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },

  deleteText: {
    color: "white",
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
});