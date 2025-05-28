import Header from '@/components/Header';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useAuthStore } from '../../store/auth';
import styles from '../../styles/stylesHome';

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
      <View style={styles.container}>
        {/* Header */}

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        {/* Proxima Reserva */}
        <View style={styles.proximaReserva}>
          <Text style={styles.proximaReservaTitle}>Próxima Reserva</Text>
          <View style={{ marginTop: 8 }}>
            <Image style={styles.logoPlaceholder}/>
            <Text  style={styles.proximaReservaText}>Viernes 21 de Mayo, 2025</Text>
            <Text  style={styles.proximaReservaText}>15:00hs - 16:30hs - Lavado Completo</Text>
          </View>
        </View>

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
            <View style={styles.autoDescription}>
              <View style={styles.carInfo}>
                <Image style={styles.logoPlaceholder}/>
                <Text style={styles.carTitle}>Honda Civic</Text>
                <Text style={styles.carSubtitle}>2020 - Sedan</Text>
                <Text style={styles.tag}>Vehículo Principal</Text>
              </View>
              <View style={styles.carAction}>
                <Text style={styles.lastWashText}>Ultimo Lavado: 15 Días atrás</Text>
                <Text style={styles.lastWashText}>¿Tiempo para un lavado?</Text>
                <TouchableOpacity style={styles.reserveButton}>
                  <Text style={styles.reserveText}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.autoDescription}>
                <View style={styles.carInfo}>
                  <Image style={styles.logoPlaceholder}/>
                  <Text style={styles.carTitle}>Toyota RAV4</Text>
                  <Text style={styles.carSubtitle}>2022 - SUV</Text>
                  <Text style={styles.tag}>Vehículo Secundario</Text>
                </View>
              <View style={styles.carAction}>
                <Text style={styles.lastWashText}>Ultimo Lavado: 1 Mes atrás</Text>
                <Text style={styles.lastWashText}>¿Tiempo para un lavado?</Text>
                <TouchableOpacity style={styles.reserveButton}>
                  <Text style={styles.reserveText}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.recomendadoCard}>
              <View style={styles.recomendadoTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.serviceTitle}>Lavado Básico</Text>
                  <Text style={styles.serviceDescription}>
                    Lavado exterior y aseo rápido básico
                  </Text>
                  <Text style={styles.durationText}>🕒 Duración: 45 min</Text>
                </View>
                <Text style={styles.priceText}>$12.000 CLP</Text>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.availableTag}>Disponible Hoy</Text>
                <TouchableOpacity style={styles.reserveButton}>
                  <Text style={styles.reserveText}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.recomendadoCard}>
              <View style={styles.recomendadoTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.serviceTitle}>Lavado Completo</Text>
                  <Text style={styles.serviceDescription}>
                    Exterior, interior y aspirado completo
                  </Text>
                  <Text style={styles.durationText}>🕒 Duración: 1h 30min</Text>
                </View>
                <Text style={styles.priceText}>$18.000 CLP</Text>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.availableTag}>Disponible Hoy</Text>
                <TouchableOpacity style={styles.reserveButton}>
                  <Text style={styles.reserveText}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        {/* Botones inferiores */}
        <TouchableOpacity style={styles.addCarButton}>
          <Text style={styles.addCarText}>Agregar Vehículo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reserveNowButton}>
          <Text style={styles.reserveNowText}>Reservar Ahora</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}