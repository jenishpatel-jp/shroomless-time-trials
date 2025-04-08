import React from 'react';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF1BDC',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Old Maps',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="timer-sand" size={30} color="#2CBDFE" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newMaps"
        options={{
          title: 'New Maps',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="timer-sand-complete" size={30} color="#2CBDFE" />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
