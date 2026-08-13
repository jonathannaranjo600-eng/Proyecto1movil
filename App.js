import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import DetailsScreen from './screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Este Stack maneja: Lista de proyectos -> Detalles
function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Proyectos" component={ProjectsScreen} />
      <Stack.Screen name="Detalles" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Las pestañas de abajo: Inicio y Proyectos
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen
          name="Portafolio"
          component={ProjectsStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}