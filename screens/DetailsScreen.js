import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { proyecto } = route.params;

  return (
    <ScrollView style={styles.contenedor}>
      <Image source={{ uri: proyecto.imagen }} style={styles.imagen} />
      <View style={styles.cuerpo}>
        <Text style={styles.titulo}>{proyecto.titulo}</Text>
        <Text style={styles.descripcion}>{proyecto.descripcionLarga}</Text>

        <Text style={styles.subtitulo}>Tecnologías</Text>
        {proyecto.tecnologias.map((tec, index) => (
          <Text key={index} style={styles.tec}>• {tec}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#fff' },
  imagen: { width: '100%', height: 220 },
  cuerpo: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  descripcion: { fontSize: 16, color: '#444', lineHeight: 24, marginBottom: 20 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  tec: { fontSize: 16, color: '#555', marginBottom: 4 },
});