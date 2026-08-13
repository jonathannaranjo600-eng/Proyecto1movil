import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <Image source={require('../assets/fotoperfil.png')} style={styles.foto} />
      <Text style={styles.nombre}>Jonathan Naranjo</Text>
      <Text style={styles.titulo}>Diseñador Gráfico & Branding</Text>
      <Text style={styles.frase}>"El buen diseño no grita. Convence."</Text>

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Portafolio')}>
        <Text style={styles.botonTexto}>Ver mis proyectos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#5A2A10',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  foto: {
    width: 150, height: 150, borderRadius: 75,
    marginBottom: 20, borderWidth: 2, borderColor: '#E7E1CA',
  },
  nombre: { fontFamily: 'Syne_800ExtraBold', fontSize: 30, color: '#E7E1CA', textAlign: 'center' },
  titulo: { fontFamily: 'Syne_400Regular', fontSize: 16, color: '#E7E1CA', opacity: 0.8, marginTop: 6, marginBottom: 20 },
  frase: { fontFamily: 'Syne_400Regular', fontSize: 14, color: '#E7E1CA', opacity: 0.65, textAlign: 'center', marginBottom: 36 },
  boton: { backgroundColor: '#E7E1CA', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 30 },
  botonTexto: { fontFamily: 'Syne_700Bold', color: '#5A2A10', fontSize: 16 },
});