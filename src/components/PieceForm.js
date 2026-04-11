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
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  label: {
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "#6c757d",
  },
  cancelText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});