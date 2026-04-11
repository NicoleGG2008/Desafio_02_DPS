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
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!type || !brand || !serialNumber || !date) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    const newPiece = {
      id: Date.now().toString(),
      type,
      brand,
      serialNumber,
      date,
    };

    onAdd(newPiece);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pieza</Text>
      <TextInput value={type} onChangeText={setType} style={styles.input} />

      <Text style={styles.label}>Marca</Text>
      <TextInput value={brand} onChangeText={setBrand} style={styles.input} />

      <Text style={styles.label}>No. Serie</Text>
      <TextInput
        value={serialNumber}
        onChangeText={setSerialNumber}
        style={styles.input}
      />

      <Text style={styles.label}>Fecha (YYYY-MM-DD)</Text>
      <TextInput value={date} onChangeText={setDate} style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={onCancel}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: "bold", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  cancel: {
    backgroundColor: "#6c757d",
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  cancelText: { color: "white", textAlign: "center", fontWeight: "bold" },
});