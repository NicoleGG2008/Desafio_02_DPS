import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const TYPES = [
  "Filtro de aire",
  "Batería",
  "Frenos",
  "Neumático",
  "Aceite",
  "Amortiguador",
  "Embrague",
];

export default function PieceForm({ onAdd }) {
  const [type, setType] = useState(TYPES[0]);
  const [brand, setBrand] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(""); // YYYY-MM-DD

  const handleSubmit = () => {
    console.log("handleSubmit llamado");

    if (!type || !brand || !serialNumber || !price || !date) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    const newPiece = {
      type,
      brand,
      serialNumber,
      price: parseFloat(price),
      date,
    };

    onAdd(newPiece);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pieza</Text>
      <TextInput
        value={type}
        onChangeText={setType}
        style={styles.input}
        placeholder="Filtro de aire"
      />

      <Text style={styles.label}>Marca</Text>
      <TextInput
        value={brand}
        onChangeText={setBrand}
        style={styles.input}
        placeholder="Marca"
      />

      <Text style={styles.label}>No. Serie</Text>
      <TextInput
        value={serialNumber}
        onChangeText={setSerialNumber}
        style={styles.input}
        placeholder="Serie"
      />

      <Text style={styles.label}>Fecha de cambio (YYYY-MM-DD)</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="2026-04-10"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    margin: 10,
  },
  label: {
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});