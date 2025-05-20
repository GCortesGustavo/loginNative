import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
        isAuthenticated: false,
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
        }),
        {
        name: 'auth-storage', // clave en AsyncStorage
        storage: {
            getItem: async (name) => {
            const value = await AsyncStorage.getItem(name);
            return value ?? null;
            },
            setItem: async (name, value) => {
            await AsyncStorage.setItem(name, value);
            },
            removeItem: async (name) => {
            await AsyncStorage.removeItem(name);
            },
        },
        }
    )
);
