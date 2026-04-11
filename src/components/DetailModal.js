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
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalContent: {
    width: "90%",
    maxHeight: "75%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },

  scroll: {
    marginBottom: 10,
  },

  detailRow: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },

  label: {
    fontWeight: "bold",
    color: "#333",
  },

  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  deleteBtn: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 12,
  },

  closeBtn: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 12,
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});