import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

type AuthState = {
    isAuthenticated: boolean;
    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
    login: () => void;
    logout: () => void;
};


const asyncStorage: PersistStorage<AuthState> = {
    getItem: async (name: any) => {
        const value = await AsyncStorage.getItem(name)
        return value ? JSON.parse(value) : null
    },
    setItem: async (name: any, value: any) => {
        await AsyncStorage.setItem(name, JSON.stringify(value))
    },
    removeItem: async (name: any) => {
        await AsyncStorage.removeItem(name)
    },
}


export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
        isAuthenticated: false,
        hasHydrated: false,
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
        setHasHydrated: (state: boolean) => set({ hasHydrated: state})
        }),
        {
        name: 'auth-storage', // clave en AsyncStorage
        storage: asyncStorage,
        onRehydrateStorage: () => (state) => {
            state?.setHasHydrated(true)
        }
        }
    )
);
