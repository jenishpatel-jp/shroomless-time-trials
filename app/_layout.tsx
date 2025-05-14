import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// SQLite imports
import { SQLiteProvider } from 'expo-sqlite';
import { setupDatabase } from '@/lib/db';

//Legend State imports
import { configureSynced, syncObservable } from '@legendapp/state/sync';
import { observablePersistSqlite } from '@legendapp/state/persist-plugins/expo-sqlite';
import Storage from 'expo-sqlite/kv-store';
import { observable } from '@legendapp/state';

// Legend State Global Configuration

export const state$ = observable({
  // Define your global state here
  mapAndTime: {} as Record<string, string[]>,
  trigger: false,
})

const persistOptions = configureSynced({
  persist: {
    plugin: observablePersistSqlite(Storage)
  },
});

syncObservable( 
  state$,
  persistOptions({
    persist: {
      name: 'store',
    },
  }),
);


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <SQLiteProvider databaseName='stt' onInit={setupDatabase} >
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="map/[mapName]" options={{headerShown: false}} />
        </Stack>
      </ThemeProvider>
    </SQLiteProvider>
  );
}
