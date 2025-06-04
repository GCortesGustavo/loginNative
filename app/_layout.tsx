import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from '../store/auth';

export default function AppLayout() {
  const { isAuthenticated, hasHydrated} = useAuthStore()
  const router = useRouter();
  const segments = useSegments();

  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect(() => {
    if (!hasHydrated || hasNavigated || !segments.length ) return

    const inAuthGroup = segments[0] !== '(tabs)';

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/login');
      setHasNavigated(true)
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/(tabs)');
    }

    setHasNavigated(true);
  }, [hasHydrated, isAuthenticated, segments, router, hasNavigated]);

  // if (!hasHydrated || !segments.length) {
  //   return <Text>Cargando...</Text>
  // }

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
