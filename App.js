import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Syne_400Regular,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne';

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import DetailsScreen from './screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Paleta de marca De Naranjo
const COLORS = { fondo: '#5A2A10', crema: '#E7E1CA', oscuro: '#0a0a0a' };

function ProjectsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.oscuro },
        headerTintColor: COLORS.crema,
        headerTitleStyle: { fontFamily: 'Syne_700Bold' },
      }}
    >
      <Stack.Screen name="Proyectos" component={ProjectsScreen} />
      <Stack.Screen name="Detalles" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null; // Espera a que la tipografía cargue
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: COLORS.oscuro },
          headerTintColor: COLORS.crema,
          headerTitleStyle: { fontFamily: 'Syne_700Bold' },
          tabBarStyle: { backgroundColor: COLORS.oscuro, borderTopColor: COLORS.fondo, height: 60, paddingBottom: 8 },
          tabBarActiveTintColor: COLORS.crema,
          tabBarInactiveTintColor: '#8a8172',
          tabBarLabelStyle: { fontFamily: 'Syne_600SemiBold', fontSize: 12 },
          tabBarIcon: ({ color, size }) => {
            const icono = route.name === 'Inicio' ? 'home' : 'briefcase';
            return <Ionicons name={icono} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Portafolio" component={ProjectsStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}