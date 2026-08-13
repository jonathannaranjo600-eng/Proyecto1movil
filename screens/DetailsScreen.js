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
        <View style={styles.chips}>
          {proyecto.tecnologias.map((tec, index) => (
            <Text key={index} style={styles.chip}>{tec}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#5A2A10' },
  imagen: { width: '100%', height: 240 },
  cuerpo: { padding: 22 },
  titulo: { fontFamily: 'Syne_800ExtraBold', fontSize: 26, color: '#E7E1CA', marginBottom: 12 },
  descripcion: { fontFamily: 'Syne_400Regular', fontSize: 16, color: '#E7E1CA', opacity: 0.85, lineHeight: 24, marginBottom: 24 },
  subtitulo: { fontFamily: 'Syne_700Bold', fontSize: 18, color: '#E7E1CA', marginBottom: 12 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    fontFamily: 'Syne_600SemiBold', fontSize: 13, color: '#5A2A10',
    backgroundColor: '#E7E1CA', paddingVertical: 6, paddingHorizontal: 12,
    borderRadius: 20, overflow: 'hidden',
  },
});