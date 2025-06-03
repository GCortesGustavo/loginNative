import { useAuthStore } from '@/store/auth';
import styles from '@/styles/stylesLogin';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const VALID_EMAIL = 'test@carwash.com'
const VALID_PASSWORD = '123456'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    
    
    const { login, isAuthenticated, hasHydrated } = useAuthStore();
    useEffect(() => {
        if(!hasHydrated) return;

        if(isAuthenticated) {
            router.replace('/(tabs)')
        }
    }, [hasHydrated, isAuthenticated, router])

        const handleLogin = () => {
        if(email === VALID_EMAIL && password === VALID_PASSWORD) {
            login()
            router.replace('/(tabs)')
        } else {
            alert('Por favor, ingresa tus credenciales.')
        }
    }

    const handleRegister = () => {
        if(name && email && phone && password){
            login()
            router.replace('/(tabs)')
        } else {
            alert('Por favor, completa todos los campos.')
        }
    }

    const [mode, setMode] = useState<'login' | 'register'>('login')

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState<'cliente' | 'lavador'>('cliente');



    const handleForgotPassword = () => {
        alert('Funcionalidad de recuperación no implementada todavía')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/carwashLogo.png')} style={styles.logo}/>
            <Text style={styles.title}>CarWasher 8a</Text>


            <View style={styles.switchContainer}>
                <TouchableOpacity 
                    onPress={() => setMode('login')}
                    style={[styles.switchButton, mode === 'login' && styles.activeSwitch]}
                >
                    <Text style={[styles.switchText, mode === 'login' && styles.activeSwitchText]}>
                    Iniciar Sesión
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setMode('register')}
                    style={[styles.switchButton, mode === 'register' && styles.activeSwitch]}
                >
                    <Text style={[styles.switchText, mode === 'register' && styles.activeSwitchText]}>
                    Registrarse
                    </Text>
                </TouchableOpacity>        
            </View>


            {mode === 'login' ? (
            <View style={styles.card}>
                <Text style={styles.heading}>Iniciar Sesión</Text>
                <Text style={styles.subheading}>Ingresa tus credenciales para acceder a tu cuenta.</Text>
            
                <Text style={styles.label}>Correo Electrónico:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingrese el correo electrónico'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Contraseña:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingrese contraseña'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
            ) : (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
            >
                <ScrollView
                    contentContainerStyle={{ padding: 16, flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.card}>
                        <Text style={styles.heading}>Registrarse</Text>
                        <Text style={styles.subheading}>Regístrate para comenzar a usar nuestros servicios.</Text>

                        <Text style={styles.label}>Nombre Completo</Text>
                        <TextInput 
                            style={styles.input} 
                            value={name} 
                            onChangeText={setName} 
                        />

                        <Text style={styles.label}>Correo Electrónico</Text>
                        <TextInput 
                            style={styles.input} 
                            value={email} 
                            onChangeText={setEmail} 
                            keyboardType="email-address" 
                        />

                        <Text style={styles.label}>Teléfono</Text>
                        <TextInput 
                            style={styles.input} 
                            value={phone} 
                            onChangeText={setPhone} 
                            keyboardType="phone-pad" 
                        />

                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput 
                            style={styles.input} 
                            value={password} 
                            onChangeText={setPassword} 
                            secureTextEntry 
                        />

                        <Text style={styles.label}>Rol</Text>
                        <View style={styles.pickerWrapper}>
                            <Picker
                            selectedValue={role}
                            onValueChange={(itemValue) => setRole(itemValue)}
                            style={styles.picker}
                            >
                            <Picker.Item label="Cliente" value="cliente" />
                            <Picker.Item label="Lavador" value="lavador" />
                            </Picker>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            )}
        </View>
    )
}

export default LoginScreen;