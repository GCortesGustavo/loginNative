import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AwardIcon from '../../assets/icons/award.svg';
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.headerInfo}>
              <Image source={require('../../assets/images/logo-carwash.jpeg')} style={styles.logoPlaceholder}/>
              <Text style={styles.headerText}>Car wash 8a</Text>
            </View>
              <Text style={{ color: 'white', fontSize: 12 }}>Av. Providencia 1208, Santiago, Chile</Text>
          </View>
          <View style={styles.puntosContainer}>
            <View>
              <AwardIcon width={24} height={24} />
            </View>
            <Text style={styles.puntosText}>15 Puntos</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#4CC978',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//   },
//   headerLeft: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   headerInfo: {
//     flexDirection: 'row',
//   },
//   logoPlaceholder: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#ffffff80',
//     borderRadius: 20,
//     marginRight: 8,
//   },
//   headerText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   puntosContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   puntosText: {
//     color: 'white',
//     fontWeight: '600',
//     marginLeft: 6,
//   },
//   button: {
//     backgroundColor: '#E53935',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   proximaReserva: {
//     backgroundColor: '#ECFDF5',
//     borderColor: '#4CC978',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//   },
//   proximaReservaTitle: {
//     color: '#059669',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   proximaReservaText: {
//     color: '#374151',
//     fontSize: 14,
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f5f9',
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginBottom: 16,
//   },
//   switchButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   switchText: {
//     fontWeight: '600',
//     color: '#64748B',
//   },
//   activeSwitch: {
//     backgroundColor: '#fff',
//   },
//   activeSwitchText: {
//     color: '#020817',
//   },
//   autoDescription: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#4CC978',
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 12,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 2,
//   },
//   carInfo: {
//     flex: 1,
//   },
//   carTitle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     marginBottom: 2,
//   },
//   carSubtitle: {
//     fontSize: 13,
//     color: '#64748B',
//   },
//   tag: {
//     backgroundColor: '#D1FAE5',
//     color: '#059669',
//     fontSize: 12,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//     marginTop: 6,
//     alignSelf: 'flex-start',
//   },
//   carAction: {
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//   },
//   lastWashText: {
//     fontSize: 12,
//     color: '#4B5563',
//     marginBottom: 4,
//   },
//   reserveButton: {
//     backgroundColor: '#4CC978',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },
//   reserveText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   addCarButton: {
//     borderColor: '#4CC978',
//     borderWidth: 1,
//     padding: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 12,
//     marginBottom: 8,
//   },
//   addCarText: {
//     color: '#4CC978',
//     fontWeight: 'bold',
//   },
//   reserveNowButton: {
//     backgroundColor: '#4CC978',
//     padding: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   reserveNowText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//     recomendadoCard: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#D1FADF',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   recomendadoTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   serviceTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#020817',
//   },
//   serviceDescription: {
//     fontSize: 14,
//     color: '#64748B',
//     marginTop: 4,
//   },
//   durationText: {
//     fontSize: 13,
//     color: '#94A3B8',
//     marginTop: 6,
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#16A34A',
//     alignSelf: 'flex-start',
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   availableTag: {
//     backgroundColor: '#D1FADF',
//     color: '#065F46',
//     fontWeight: '600',
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 20,
//     fontSize: 13,
//   },
// });
