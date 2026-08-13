import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProjectCard({ proyecto, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
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
    backgroundColor: '#0a0a0a',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E7E1CA33',
  },
  imagen: { width: '100%', height: 170 },
  contenido: { padding: 14 },
  titulo: { fontFamily: 'Syne_700Bold', fontSize: 18, color: '#E7E1CA', marginBottom: 4 },
  descripcion: { fontFamily: 'Syne_400Regular', fontSize: 14, color: '#E7E1CA', opacity: 0.7 },
});