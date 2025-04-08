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
          tabBarIcon: ({ focused, color }) => 
            <MaterialCommunityIcons 
              name={ focused ? "timer-sand" : "timer-sand-complete" } 
              size={30} 
              color={ focused ? "#FF1BDC" : "#2CBDFE"  }  />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newMaps"
        options={{
          title: 'New Maps',
          tabBarIcon: ({ color, focused }) => 
            <MaterialCommunityIcons 
              name={ focused ? "timer-sand" : "timer-sand-complete"}
              size= {30}   
              color={ focused ? "#FF1BDC" : "#2CBDFE"  }  />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
