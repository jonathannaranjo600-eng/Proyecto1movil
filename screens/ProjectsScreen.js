import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsScreen({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectCard
            proyecto={item}
            onPress={() => navigation.navigate('Detalles', { proyecto: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    paddingTop: 10,
  },
});