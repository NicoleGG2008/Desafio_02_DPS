import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function DetailModal({ isVisible, onClose, piece, onDelete }) {
  if (!piece) return null;

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Detalle de la pieza</Text>
          <Text style={styles.subtitle}>Información de la pieza</Text>
          <ScrollView style={styles.scroll}>
            <Text style={styles.detailRow}>
              <Text style={styles.label}>Pieza: </Text> {piece.type}
            </Text>
            <Text style={styles.detailRow}>
              <Text style={styles.label}>Marca: </Text> {piece.brand}
            </Text>
            <Text style={styles.detailRow}>
              <Text style={styles.label}>No. Serie: </Text> {piece.serialNumber}
            </Text>
            <Text style={styles.detailRow}>
              <Text style={styles.label}>Precio: </Text> ${piece.price}
            </Text>
            <Text style={styles.detailRow}>
              <Text style={styles.label}>Fecha de cambio: </Text> {piece.date}
            </Text>
          </ScrollView>
          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => {
                onDelete(piece.id);
                onClose();
              }}
            >
              <Text style={styles.btnText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={styles.btnText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "70%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 16,
  },
  scroll: {
    flex: 1,
  },
  detailRow: {
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 24,
  },
  label: {
    fontWeight: "bold",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  deleteBtn: {
    backgroundColor: "#d9534f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  closeBtn: {
    backgroundColor: "#666",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});