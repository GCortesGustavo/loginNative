import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/auth';

export default function AppLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const hasHydrated = useAuthStore((state) => state.hasHydrated)
  const router = useRouter();
  const segments = useSegments();

  const [hasNavigated, setHasNavigated] = useState(false)

  useEffect(() => {
    if (!hasHydrated || !segments.length || hasNavigated) return

    const inAuthGroup = segments[0] !== '(tabs)';

    if (!isAuthenticated && !inAuthGroup) {
      router.replace('/login');
      setHasNavigated(true)
    } else if (isAuthenticated && inAuthGroup) {
      router.replace('/(tabs)');
      setHasNavigated(true)
    }
  }, [hasHydrated, isAuthenticated, segments, router, hasNavigated]);

  // if (!hasHydrated || !segments.length) {
  //   return <Text>Cargando...</Text>
  // }

  return <Slot />;
}
