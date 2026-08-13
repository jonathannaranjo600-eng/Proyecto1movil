import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProjectCard({ proyecto, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: proyecto.imagen }} style={styles.imagen} />
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{proyecto.titulo}</Text>
        <Text style={styles.descripcion}>{proyecto.descripcionCorta}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  imagen: { width: '100%', height: 160, borderRadius: 12 },
  contenido: { padding: 12 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  descripcion: { fontSize: 14, color: '#555' },
});