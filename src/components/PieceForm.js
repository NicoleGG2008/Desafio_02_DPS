import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function PieceForm({ onAdd, onCancel }) {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (
      !type.trim() ||
      !brand.trim() ||
      !serialNumber.trim() ||
      !price.trim() ||
      !date.trim()
    ) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    const newPiece = {
      id: Date.now().toString(),
      type,
      brand,
      serialNumber,
      price: parseFloat(price),
      date,
    };

    onAdd(newPiece);

    // limpiar campos
    setType("");
    setBrand("");
    setSerialNumber("");
    setPrice("");
    setDate("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar nueva pieza</Text>

      <Text style={styles.label}>Nombre de la pieza</Text>
      <TextInput
        value={type}
        onChangeText={setType}
        style={styles.input}
        placeholder="Ej: Filtro de aire"
      />

      <Text style={styles.label}>Marca</Text>
      <TextInput
        value={brand}
        onChangeText={setBrand}
        style={styles.input}
        placeholder="Ej: Bosch"
      />

      <Text style={styles.label}>No. Serie</Text>
      <TextInput
        value={serialNumber}
        onChangeText={setSerialNumber}
        style={styles.input}
        placeholder="12345XYZ"
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        placeholder="25.00"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fecha de cambio (YYYY-MM-DD)</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        style={styles.input}
        placeholder="2026-04-10"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      {onCancel && (
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#eef2f7",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#111",
  },

  label: {
    marginBottom: 6,
    fontWeight: "600",
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    backgroundColor: "white",
    fontSize: 15,
    elevation: 2,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 4,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancelButton: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#6b7280",
    alignItems: "center",
  },

  cancelText: {
    color: "white",
    fontWeight: "bold",
  },
});