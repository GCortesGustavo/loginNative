// store/auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    hasHydrated: boolean;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
        isAuthenticated: false,
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
        hasHydrated: false,
        }),
        {
        name: 'auth-storage',
        storage: {
            getItem: async (key) => {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
            },
            setItem: async (key, value) => {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            },
            removeItem: async (key) => {
            await AsyncStorage.removeItem(key);
            },
        },
        partialize: (state: AuthState): Partial<AuthState> => ({
            isAuthenticated: state.isAuthenticated,
        }),
        onRehydrateStorage: () => (state, error) => {
            set({ hasHydrated: true }); // usamos `set` de fuera
        },
        }
    )
);
