import Header from '@/components/Header';
import ProximaReserva from '@/components/ProximaReserva';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useAuthStore } from '../../store/auth';
import styles from '../../styles/stylesHome';

const vehicles = [
    {id: '1', name: 'Honda Civic', description: '2020 - Sedan'},
    {id: '2', name: 'Hyundai Creta', description: '2022 - SUV'},
]

const lavados = [
    {id: '1', name: 'Lavado Básico', description: 'Lavado exterior y aseo rápido básico', price: '$12.000 CLP'},
    {id: '2', name: 'Lavado Completo', description: 'Exterior, interior y aspirado completo', price: '$19.000 CLP'},
]


export default function HomeScreen() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();
  const [ mode , setMode ] = useState<'vehiculos' | 'recomendados'>('vehiculos')

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}

          <TouchableOpacity style={styles.buttonLogOut} onPress={handleLogout}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>

          {/* Proxima Reserva */}
          <ProximaReserva />

          {/* Buton Switch */}
          <View style={styles.switchContainer}>
            <TouchableOpacity
              onPress={() => setMode('vehiculos')}
              style={[styles.switchButton, mode === 'vehiculos' && styles.activeSwitch]}
            >
              <Text style={[styles.switchText, mode === 'vehiculos' && styles.activeSwitchText]}>
                Mis Vehículos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMode('recomendados')}
              style={[styles.switchButton, mode === 'recomendados' && styles.activeSwitch]}
            >
              <Text style={[styles.switchText, mode === 'recomendados' && styles.activeSwitchText]}>
                Recomendados
              </Text>
            </TouchableOpacity>
          </View>

          {mode === 'vehiculos' ? (
            <>
              {vehicles.map((vehicle) => (
                  <View style={styles.autoDescription} key={vehicle.id}>
                    <View style={styles.carInfo} >
                      <View style={styles.carIcon}>
                        <Ionicons name='car-outline' size={40} color='#4CC978'/>
                      </View>
                      <View>
                        <Text style={styles.carTitle}>Honda Civic</Text>
                        <Text style={styles.carSubtitle}>2020 - Sedan</Text>
                        <Text style={styles.tag}>Vehículo Principal</Text>
                      </View>
                    </View>
                    <View style={styles.carAction}>
                      <View>
                        <Text style={styles.lastWashText}>Ultimo Lavado: 15 Días atrás</Text>
                        <Text style={styles.lastWashText}>¿Tiempo para un lavado?</Text>  
                      </View>
                      <TouchableOpacity style={styles.reserveButton} onPress={() => router.replace('/reservas')}>
                        <Text style={styles.reserveText}>Reservar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              ))}
            </>
          ) : (
            <>
              {lavados.map((lavado) => (
                <View style={styles.recomendadoCard} key={lavado.id}>
                  <View style={styles.recomendadoTop}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.serviceTitle}>{lavado.name}</Text>
                      <Text style={styles.serviceDescription}>
                        {lavado.description}
                      </Text>
                      <Text style={styles.durationText}>🕒 Duración: 45 min</Text>
                    </View>
                    <Text style={styles.priceText}>{lavado.price}</Text>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.availableTag}>Disponible Hoy</Text>
                    <TouchableOpacity style={styles.reserveButton} onPress={() => router.replace('/reservas')}>
                      <Text style={styles.reserveText}>Reservar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </>
          )}

          {/* Botones inferiores */}
          <TouchableOpacity style={styles.addCarButton}>
            <Ionicons name='car-outline' size={24} color='#4CC978'/>
            <Text style={styles.addCarText}>Agregar Vehículo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.reserveNowButton} onPress={() => router.replace('/reservas')}>
            <Text style={styles.reserveNowText}>Reservar Ahora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}