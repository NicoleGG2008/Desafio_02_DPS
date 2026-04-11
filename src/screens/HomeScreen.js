
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
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
      {/* Título y botón agregar */}
      <View style={styles.header}>
        <Text style={styles.title}>Piezas</Text>
        <Button
          title="Agregar piezas"
          onPress={() => setShowForm(true)}
        />
      </View>

      {/* Historial de piezas */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Historial de piezas</Text>
        {pieces.length === 0 ? (
          <Text style={styles.emptyText}>No hay piezas, agregue una</Text>
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

      {/* Modal: formulario agregar pieza */}
      <Modal
        visible={showForm}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <PieceForm
            onAdd={handleAddPiece}
            onCancel={() => setShowForm(false)}
          />
        </View>
      </Modal>

      {/* Modal: detalle de la pieza */}
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
    backgroundColor: "#f7f8f9",
  },
  header: {
    padding: 20,
    backgroundColor: "#007bff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  historyContainer: {
    flex: 1,
    padding: 15,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
  },
  pieceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  pieceMain: {
    flex: 1,
  },
  pieceType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pieceDate: {
    fontSize: 12,
    color: "#666",
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f7f8f9",
  },
});