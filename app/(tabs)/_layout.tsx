import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/components/defaultComponents/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Old Maps',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="timer-sand" size={24} color="orange" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newMaps"
        options={{
          title: 'New Maps',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="timer-sand-complete" size={24} color="orange" />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
