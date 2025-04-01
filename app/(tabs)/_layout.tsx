import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/components/defaultComponents/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "Black",
        tabBarInactiveBackgroundColor:"Black",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Old Maps',
          tabBarIcon: ({ color }) => <TabBarIcon name="mushroom-off-outline" color={"purple"} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newMaps"
        options={{
          title: 'New Maps',
          tabBarIcon: ({ color }) => <TabBarIcon name="mushroom-off-outline" color={"pink"} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
