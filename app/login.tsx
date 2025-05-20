import { useAuthStore } from '@/store/auth';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const VALID_EMAIL = 'test@carwash.com'
const VALID_PASSWORD = '123456'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CC978',
        marginBottom: 24,
    },
    card: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        overflow: 'scroll'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#020817'
    },
    subheading: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#4CC978',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 16,
        textAlign: 'center',
        color: '#4CC978',
        textDecorationLine: 'underline',
    },
    switchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
    },
    switchButton: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    switchText: {
        fontWeight: '600',
        color: '#64748B',
    },
    activeSwitch: {
        backgroundColor: '#fff',
    },
    activeSwitchText: {
        color: '#020817',
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        overflow: 'hidden',

    },
    picker: {
        backgroundColor: '#fff',
        height: 50,
    },
});


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = useAuthStore((state) => state.login)
    const router = useRouter()

    const [mode, setMode] = useState<'login' | 'register'>('login')

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState<'cliente' | 'lavador'>('cliente');

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

    const handleForgotPassword = () => {
        alert('Funcionalidad de recuperación no implementada todavía')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo-carwash.jpeg')} style={styles.logo}/>
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