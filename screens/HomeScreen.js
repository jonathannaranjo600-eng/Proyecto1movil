import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <Image
        source={require('../assets/fotoperfil.png')}
        style={styles.foto}
      />
      <Text style={styles.nombre}>Jonathan Naranjo</Text>
      <Text style={styles.titulo}>Diseñador y Desarrollador Web</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Portafolio')}
      >
        <Text style={styles.botonTexto}>Ver mis proyectos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  nombre:   { fontSize: 26, fontWeight: 'bold', color: '#1a1a2e' },
  titulo:   { fontSize: 16, color: '#555', marginBottom: 30 },
  boton: {
    backgroundColor: '#4a47a3',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  botonTexto: { color: '#fff', fontSize: 16, fontWeight: '600' },
});