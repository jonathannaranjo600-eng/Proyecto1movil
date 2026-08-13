import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, StyleSheet } from 'react-native';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsScreen({ navigation }) {
  // useState: guarda lo que el usuario escribe en la búsqueda
  const [busqueda, setBusqueda] = useState('');

  // Filtramos los proyectos según el texto escrito
  const proyectosFiltrados = projects.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.buscador}
        placeholder="Buscar proyecto..."
        placeholderTextColor="#E7E1CA99"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={proyectosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectCard
            proyecto={item}
            onPress={() => navigation.navigate('Detalles', { proyecto: item })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>No se encontraron proyectos.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#5A2A10',
    paddingTop: 12,
  },
  buscador: {
    backgroundColor: '#0a0a0a',
    color: '#E7E1CA',
    fontFamily: 'Syne_400Regular',
    fontSize: 15,
    marginHorizontal: 16,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E7E1CA33',
  },
  vacio: {
    fontFamily: 'Syne_400Regular',
    color: '#E7E1CA',
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 30,
  },
});