import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const InventoryScreen = () => {
  // Estados para manejar el ingreso de datos
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [price, setPrice] = useState('');

  // Función para manejar el envío del formulario
  const handleAddCamera = () => {
    // Aquí puedes agregar la lógica para guardar la nueva cámara en el inventario
    console.log({
      reference,
      description,
      cost,
      price
    });
    // Limpiar los campos después de agregar la cámara
    setReference('');
    setDescription('');
    setCost('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingreso de Inventario de Cámaras de Seguridad</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Referencia"
        value={reference}
        onChangeText={setReference}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="Costo de la cámara"
        value={cost}
        onChangeText={setCost}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Precio de venta"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button title="Agregar Nueva Cámara" onPress={handleAddCamera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff'
  }
});

export default InventoryScreen;
